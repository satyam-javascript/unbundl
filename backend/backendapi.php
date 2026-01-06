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
            }else{
            handleGetAll($conn,$categoryAll="",$range);
            }
        }
        elseif(isset($_GET['categoryAll'])){
            $categoryAll = $_GET['categoryAll'];
            handleGetAll($conn,$categoryAll,$range="");
        }
       elseif (isset($_GET['category'])) {
        $category = $_GET['category'];
        $category = " = ".$category;
        handleGet($conn,$category);
        }else{
             handleGet($conn,$category="");
        }

       
        break;
    case 'POST':
        handlePost($pdo, $input);
        break;
    case 'PUT':
        handlePut($pdo, $input);
        break;
    case 'DELETE':
        handleDelete($pdo, $input);
        break;
    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
}

function handleGet($conn,$category) {
            $sql = "SELECT * FROM products";
            if($category !=""){
                if($category == "latest"){
                    $sql .= " ORDER BY id DESC LIMIT 9";
                }elseif($category == "searched"){
                 $sql = "SELECT  * FROM  products  WHERE searchcount > 1 GROUP BY searchcount ORDER BY id DESC LIMIT 9";
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

function handlePost($pdo, $input) {
    $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['name' => $input['name'], 'email' => $input['email']]);
    echo json_encode(['message' => 'User created successfully']);
}

function handlePut($pdo, $input) {
    $sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['name' => $input['name'], 'email' => $input['email'], 'id' => $input['id']]);
    echo json_encode(['message' => 'User updated successfully']);
}

function handleDelete($pdo, $input) {
    $sql = "DELETE FROM users WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $input['id']]);
    echo json_encode(['message' => 'User deleted successfully']);
}
?>