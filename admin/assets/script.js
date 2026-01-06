async function fetchData(url) {
  const response = await fetch(url); // Wait for the server response
  const data = await response.json(); // Wait for the response body to be 
 return data;
}

fetchData("http://localhost/unbundl/backend/backendapi.php?searched=true")
.then((data)=>{
CardProduct(data,".searched-content")
})

fetchData("http://localhost/unbundl/backend/backendapi.php?latest=true")
.then((data)=>{
CardProduct(data,".latestcar-content")
})

function Getproduct(id){
fetchData(`http://localhost/unbundl/backend/backendapi.php?category=${id}`)
.then(data=>{
CardProduct(data,".searched-content")
    
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
fetchData(`http://localhost/unbundl/backend/backendapi.php?categoryAll=${categoryAll}`)
.then(data=>{
CardProduct(data,".searched-content")
    
})
}

function VolumeSlider(Value){
const output = document.getElementById('valueOutput');
console.log(Value.value)
     output.textContent = Value.value;
     let category = [];
     document.querySelectorAll('.nav-links input').forEach(i=>{
            if(i.checked){
            category.push(i.value);   
            }
        })
  
   const categoryAll = category.join();

fetchData(`http://localhost/unbundl/backend/backendapi.php?range=${Value.value}${categoryAll && "&categoryAll="+categoryAll}`)
.then(data=>{
CardProduct(data,".searched-content")
    
})

}


function CardProduct(data,elementSelect){
 this.document.querySelector(""+elementSelect+"").innerHTML="";
    if(!data.status) {
     data.forEach(element => {
 this.document.querySelector(""+elementSelect+"").innerHTML+=`
                        <div class="card-product">
                        <div class="car-image">
                        <img src="${element.image}" alt="">
                        </div>
                        <div class="car-info">
                        <input type="hidden" value="${element.category}"/>
                        <span class="title">${element.name}</span>
                        <span class="price">${element.price}L</span>
                        <input type="checkbox" class="product-id" hidden value="${element.id}" id="${element.id}"/>
                        <div class="adding"><button class="btn btn-adding" onclick="AddingCart(${element.id})">Add</div>
                        </div>
                        </div>
    `;
})
}else{
    this.document.querySelector(""+elementSelect+"").innerHTML+=`<h2>Car Not Found! </h2>`
        return ;
}
}

function AddingCart(ids){
   const productid =  document.querySelector(".product-id[value='"+ids+"']")
                        if(productid != undefined && !productid.checked){
                       document.querySelector(".product-id[value='"+ids+"']").checked = true;
                        }else{
                            document.querySelector(".product-id[value='"+ids+"']").checked = false; 
                        }

 document.querySelectorAll(".product-id").forEach(i=>{
if(i.checked){
     console.log(i)
}
 })
   
}

                      
function Model(){
  document.querySelector('.model').style.display = 'flex'  
}

function FromSend(){
  document.querySelector('.model-header h3').innerHTML = 'Tank You For Your Responce'  

    setTimeout(()=>{
        document.querySelector('.model').style.display = 'none'
    },2000)
}

document.addEventListener("DOMContentLoaded", (event) => {
document.querySelector('.model').addEventListener("click",(e)=>{
    console.log(e.target.className)
    if(e.target.className == "model"){
        document.querySelector('.model').style.display = 'none'
    }
})
});