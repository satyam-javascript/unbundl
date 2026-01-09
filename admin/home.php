<?php
session_start();

// Check if the user is logged in, if
// not then redirect them to the login page
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarTreands.com</title>
<link rel="stylesheet" href="./assets/style.css"/>
</head>
<body>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                   <h1>CarTrands</h1>
                   <span>Admin Pannel</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#home" onclick="HeaderUpdate()">Update Header</a></li>
                    <li><a href="#Menu" onclick="HeroUpdate()">Update Hero Section </a></li>
                    <li><a href="#About" onclick="AboutUpdate()">About</a></li>
                    <li><a href="#Contact-Us" onclick="ContactUpdate()">Contact-Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        
    
             
             <section class="custom-updates">

            </section>



       <section class="mostsearched">
        <div class="searched-header">
            <h3>The most searched cars</h3>
        </div>
        <div class="searched-content">

        </div>
       </section> 
        <section class="latestcar">
        <div class="latestcar-header">
            <h3>Latest Cars</h3>
        </div>
        <div class="latestcar-content">
            
        </div>
       </section> 
         

    </main>

    
    
<model class="model">
<div class="model-main">
    <div class="model-header">
        <h3>Submit your Responce</h3>
    </div>
    <div class="model-content">
      <div class="image-area">
        <img class="image" src=""/>
    </div>
       <div class="product-edit">
           Image:<input type="text" onchange="ChangeImage(this)" class="image-lin" value=""/>
           Category:<input type="text" class="category" value=""/>
           Name:<input type="text" class="name" value=""/>
           Price: <input type="text" class="price" value=""/>            
       </div>
        
        <div class="fields sendbutton">
          <button class="btn btn-form" onclick="FromSend(this)">Update</button>
         </div>
    </div>

</div>
</model>
</body>
<script src="./assets/script.js" type="text/javascript"></script>
</html>