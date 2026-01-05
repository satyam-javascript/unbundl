async function fetchData(url) {
  const response = await fetch(url); // Wait for the server response
  const data = await response.json(); // Wait for the response body to be 
 return data;
}

fetchData("http://localhost/unbundl/backend/frontendapi.php").then((data)=>{
    this.document.querySelector('.product-content').innerHTML="";
  data.forEach(element => {
 this.document.querySelector('.product-content').innerHTML+=`
                        <div class="card-product">
                        <div class="car-image">
                        <img src="${element.image}" alt="">
                        </div>
                        <div class="car-info">
                        <input type="hidden" value="${element.category}"/>
                        <span class="title">${element.name}</span>
                        <span class="price">${element.price}</span>
                        </div>
                        </div>
    `;
})
})

function Getproduct(id){
fetchData(`http://localhost/unbundl/backend/frontendapi.php?category=${id}`)
.then(data=>{
    this.document.querySelector('.product-content').innerHTML="";
     data.forEach(element => {
 this.document.querySelector('.product-content').innerHTML+=`
                        <div class="card-product">
                        <div class="car-image">
                        <img src="${element.image}" alt="">
                        </div>
                        <div class="car-info">
                        <input type="hidden" value="${element.category}"/>
                        <span class="title">${element.name}</span>
                        <span class="price">${element.price}</span>
                        </div>
                        </div>
    `;
})
})
   
}


function handleCheck (check){
let category = [];
document.querySelectorAll('.nav-links input').forEach(i=>{
    if(i.checked){
     category.push(i.value);   
    }
})
  
   const categoryAll = category.join();

fetchData(`http://localhost/unbundl/backend/frontendapi.php?categoryAll=${categoryAll}`)
.then(data=>{
    this.document.querySelector('.product-content').innerHTML="";
     data.forEach(element => {
 this.document.querySelector('.product-content').innerHTML+=`
                        <div class="card-product">
                        <div class="car-image">
                        <img src="${element.image}" alt="">
                        </div>
                        <div class="car-info">
                        <input type="hidden" value="${element.category}"/>
                        <span class="title">${element.name}</span>
                        <span class="price">${element.price}</span>
                        </div>
                        </div>
    `;
})
})
}