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
                   <span>Reference: carsdekho.com</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact-Us">Contact-Us</a></li>

                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>Welcome To Site</h2>
                <p>Experienc the racing car with me and my friends jame luke</p>
                <div class="hero-button">
                    <a href="#menu" class="btn btn-primary">Join With US</a>
                    <a href="#contact" class="btn btn-secondery">Explore</a>
                </div>
            </div>
        </section>

        <section id="products" class="products-section">
            <div class="products-menu">
                    <div class="product-range">
                          <label for="vol">Range :</label>
                        <input type="range" id="vol" name="vol" min="1" max="80">
                    </div>
                   
            <div class="container">
                        <nav class="navbar">
                        <ul class="nav-links">
                        <li>
<input type="checkbox" id="myCheckbox" onchange="handleCheck(this)" value="suv">
                        <a onclick="Getproduct(this.id)" id="suv" href="#suv">SUV</a></li>
                        <li>
                           <input type="checkbox" id="myCheckbox" onchange="handleCheck(this)" value="hatchback">
                            <a onclick="Getproduct(this.id)" id="hatchback" href="#hatchback">Hatchback</a></li>
                        <li>
                            <input type="checkbox" id="myCheckbox" onchange="handleCheck(this)" value="sedan">
                            <a onclick="Getproduct(this.id)" id="sedan" href="#sedan">Sedan</a></li>

                        </ul>
                        </nav>
             </div>
 <div class="product-query-form">
                        <button class="btn btn-secondery">Submit</button>
                    </div>
            </div>
            <div class="product-content">
                <!-- card-product api (frontendapi.php) -->
                      
                    
            </div>
        </section>


    </main>
</body>
<script src="./assets/script.js" type="text/javascript"></script>
</html>