<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache, must-revalidate');
header("Content-Type: application/json");

include "db.php";

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if(isset($_GET['searched'])){
             $searched = "searched";
        handleGet($conn,$searched);
        }
        elseif(isset($_GET['latest'])){ 
            $latest = "latest";
        handleGet($conn,$latest);
        }
        elseif(isset($_GET['range'])){
            $range = $_GET['range'];
            if(isset($_GET['categoryAll'])){
            $categoryAll = $_GET['categoryAll'];
            handleGetAll($conn,$categoryAll,$range);
            }
             else{
            handleGetAll($conn,$categoryAll="",$range);
            }
        }
        elseif(isset($_GET['editid'])){
            $editid = $_GET['editid'];
          handleGetId($conn,$editid);
        }
        elseif(isset($_GET['categoryAll'])){
            $categoryAll = $_GET['categoryAll'];
            handleGetAll($conn,$categoryAll,$range="");
        }
       elseif (isset($_GET['category'])) {
        $category = $_GET['category'];
        $category = " = ".$category;
        handleGet($conn,$category);
        }
      elseif (isset($_GET['header_menu'])) {
        handleGetHeadermenu($conn,$input);
       } 
       elseif(isset($_GET['hero_link'])){
            HeroSectionGet($conn,$input);
       }else{
             handleGet($conn,$category="");
        }

       
      

        break;
    case 'POST':
        handlePost($conn, $input);
        break;
    case 'PUT':
        handlePut($conn, $input);
        break;
    case 'DELETE':
        handleDelete($conn, $input);
        break;
    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
}

function handleGetId($conn,$editid){
      $sql = "SELECT * FROM products WHERE id = $editid";
            $result = mysqli_query($conn, $sql);

            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            if (mysqli_num_rows($result) > 0) {
            $data = [];
            while($row = $result->fetch_assoc()) {
            $data[] = $row;
            }

            echo json_encode($data);
            }
            mysqli_free_result($result);
            }
}
 

function handleGet($conn,$category) {
            $sql = "SELECT * FROM products";
            if($category !=""){
                if($category == "latest"){
                    $sql .= " ORDER BY id DESC LIMIT 9";
                }elseif($category == "searched"){
                 $sql = "SELECT  * FROM  products  WHERE searchcount > 1 GROUP BY searchcount ORDER BY id DESC LIMIT 9";
                }
                elseif($category == "editid"){
                   $sql .= " WHERE `id` $category";
                }else{
                $sql .= " WHERE `category` $category";
                }
            }
            $result = mysqli_query($conn, $sql);


            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            if (mysqli_num_rows($result) > 0) {
            $data = [];
            while($row = $result->fetch_assoc()) {
            $data[] = $row;
            }

            echo json_encode($data);
            }
            mysqli_free_result($result);
            }
    
}

function handleGetAll($conn,$categoryAll,$range) {
        $newString = strrpos($categoryAll, ',');
        if ($newString !== false) {

            $newStringvalue = "";
           $categoryAll =  explode(",",$categoryAll);
           foreach ($categoryAll as $key => $value) {
             $newStringvalue .= "'" . $value . "',";
           }
            $newStringvalue = rtrim($newStringvalue, ',');
            $categoryAll = "`category` IN(".$newStringvalue.")";

            if(!empty($range)){
                 $categoryAll .= " AND price = ".$range." ";
            }
     }else{ 
        if(!empty($categoryAll)){
            $categoryAll = " `category` = "."'".$categoryAll."'";
                 if(!empty($range)){
                $categoryAll .= " AND `price` = ".$range." ";
            }
        }elseif(!empty($range)){
                 $categoryAll = " `price` = "."'".$range."'";
            }
             
        }
        // echo ">>>".$categoryAll;
            $sql = "SELECT * FROM products WHERE  $categoryAll";
            $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            if (mysqli_num_rows($result) > 0) {
            $data = [];
            while($row = $result->fetch_assoc()) {
            $data[] = $row;
            }

            echo json_encode($data);
            }else{
                echo json_encode(["status"=>400,"message"=>"Data Not Found"]);
            }
            mysqli_free_result($result);
            }
    
}

function handlePost($conn, $input) {
    if(isset($input['addsinglemenu'])){
         $sql = "INSERT INTO header_menu (name, link) 
         VALUES ('".$input['name']."',
         '".$input['link']."')";
            $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            }else{
            echo json_encode(["status"=>201,'message' => 'Menu added: '.$input['name']]);

            }
            }
    
    // else{
    // $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
    // $stmt = $pdo->prepare($sql);
    // $stmt->execute(['name' => $input['name'], 'email' => $input['email']]);
    // echo json_encode(['message' => 'User created successfully']);
    // }

}

function handlePut($conn, $input) {

if(isset($input['updatedatas'])){

    $sql = "UPDATE `header_menu` SET `name`='".$input['name']."',
    `link`='".$input['link']."' WHERE id = '".$input['id']."'";

      $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            echo json_encode(["status"=>202,"name"=>$input['name'],"link"=>$input['link'],"message"=>"Updated : ".$input['name']]);
            }

    }elseif(isset($input['categoryupdate'])){

    $sql = "UPDATE `products` SET `category`='".$input['categoryupdate']."',
    `name`='".$input['name']."',`price`='".$input['price']."',`image`='".$input['imagelink']."' ,`updatedat`= NOW() WHERE id = '".$input['id']."'";

      $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            echo json_encode(["status"=>202,"message"=>"Updated : ".$input['name']]);
            }


        }
        elseif(isset($input['heroimage_change'])){

    $sql = "UPDATE `hero_section` SET `link`='".$input['link']."' WHERE id = '".$input['id']."'";
      $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            echo json_encode(["status"=>202,"link"=>$input['link'],"message"=>"Hero Image Updated !"]);
            }

    }
}

function handleDelete($conn, $input) {

    if(isset($input['removeid'])){
     $sql = "DELETE FROM header_menu WHERE id = '".$input['id']."'";
      $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            }else{
            echo json_encode(["status"=>203,'message' => 'Menu deleted ! ']);

            }

    }
        else{

    $sql = "DELETE FROM users WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $input['id']]);
    echo json_encode(['message' => 'User deleted successfully']);
        }
}


function handleGetHeadermenu($conn,$input){

   
            $sql = "SELECT * FROM header_menu";
            $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            if (mysqli_num_rows($result) > 0) {
            $data = [];
            while($row = $result->fetch_assoc()) {
            $data[] = $row;
            }

            echo json_encode($data);
            }else{
                echo json_encode(["status"=>400,"message"=>"Data Not Found"]);
            }
            mysqli_free_result($result);
            }

}


function HeroSectionGet($conn,$input){
 $sql = "SELECT * FROM `hero_section`";
      $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
                 if (mysqli_num_rows($result) > 0) {
            $data = [];
            while($row = $result->fetch_assoc()) {
            $data[] = $row;
            }

            echo json_encode($data);
            }else{
                echo json_encode(["status"=>400,"message"=>"Data Not Found"]);
            }
            }
}

function HeroSectionPUT($conn,$input){
 $sql = "UPDATE `hero_section` SET `link`='".$input['link']."',
    `link`='".$input['link']."' WHERE id = '".$input['id']."'";

      $result = mysqli_query($conn, $sql);
            if ($result === FALSE) {
            echo "Query failed: " . mysqli_error($conn);
            } else {
            echo json_encode(["status"=>202,"name"=>$input['name'],"link"=>$input['link'],"message"=>"Updated : ".$input['name']]);
            }
}
?>
