async function fetchData(url) {
  const response = await fetch(url); // Wait for the server response
  const data = await response.json(); // Wait for the response body to be 
 return data;
}

fetchData("http://localhost/unbundl/backend/frontendapi.php")
.then((data)=>{
CardProduct(data)
})

function Getproduct(id){
fetchData(`http://localhost/unbundl/backend/frontendapi.php?category=${id}`)
.then(data=>{
 CardProduct(data)
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
   CardProduct(data)
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

fetchData(`http://localhost/unbundl/backend/frontendapi.php?range=${Value.value}${categoryAll && "&categoryAll="+categoryAll}`)
.then(data=>{
   CardProduct(data)
})

}


function CardProduct(data){
 this.document.querySelector('.product-content').innerHTML="";
    if(!data.status) {
 document.querySelector('.product-content').style.display = 'flex'

     data.forEach(element => {
 this.document.querySelector('.product-content').innerHTML+=`
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
    this.document.querySelector('.product-content').innerHTML+=`<h2>Car Not Found! </h2>`
    document.querySelector('.product-content h2').style.textAlign = 'center'
    document.querySelector('.product-content').style.display = 'block'

        return ;
}
}

function AddingCart(ids){
   const productid =  document.querySelector(".product-id[value='"+ids+"']")
                        if(productid != undefined && !productid.checked){
    document.querySelector('[onclick="AddingCart('+ids+')"]').classList.add('car-active')
    document.querySelector('[onclick="AddingCart('+ids+')"]').innerHTML = 'Added'

                       document.querySelector(".product-id[value='"+ids+"']").checked = true;
                        }else{
    document.querySelector('[onclick="AddingCart('+ids+')"]').classList.remove('car-active')
    document.querySelector('[onclick="AddingCart('+ids+')"]').innerHTML = 'Add'

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


const postData = async (url, data) => {
  try {
            const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(data)  
            });

            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();  
            return result;
  } catch (error) {
             console.error('Error:', error);
  }
};



GetHeaderLinks();
function GetHeaderLinks()
{
 fetchData("http://localhost/unbundl/backend/backendapi.php?header_menu=true")
.then((data)=>{
 let menuhtml = '';
    data.forEach(i=>{
      menuhtml+=` <li><a id="${i.id}" href="${i.link}">${i.name}</a></li>`;
    })
document.querySelector('header .nav-links').innerHTML = menuhtml;
 
})
}

GetHeroImage();
function GetHeroImage()
{
 fetchData("http://localhost/unbundl/backend/backendapi.php?hero_link=true")
.then((data)=>{
 let menuhtml = '';
    data.forEach(i=>{
      menuhtml=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${i.link}) center / cover`;
    })
    console.log(menuhtml)

document.querySelector('.hero').style.background = menuhtml;
 
})
}


function FromSend(){
        let username =  document.querySelector('#username')
        let phone =  document.querySelector('#phone') 
        let email = document.querySelector('#email') 
        let address =  document.querySelector('#address') 
        let category = [];
        document.querySelectorAll('.product-id').forEach(i=>{
        if(i.checked){
        category.push(i.value); 
        }
        })
        // console.log(category)

        if(category.length === 0){
             document.querySelector('.model-header h3').innerHTML =
              'Need to chose anyone car from list!' 
            return;
        }

            if(!username.value.trim() || !phone.value.trim() || !email.value.trim() || !address.value.trim() ){
             document.querySelector('.model-header h3').innerHTML =
              'Need to filed all details !' 
                if(!username.value.trim()){
                    username.classList.add('required-color')
                }else username.classList.remove('required-color')
                if(!phone.value.trim()){
                    phone.classList.add('required-color')
                }else phone.classList.remove('required-color')
                if(!email.value.trim()){
                    email.classList.add('required-color')
                }else email.classList.remove('required-color')
                if(!address.value.trim()){
                    address.classList.add('required-color')
                }else address.classList.remove('required-color')
                return;
            }

const myData = {
  username:username.value,
  phone: phone.value,
  email: email.value,
  address: address.value,
  categories:category
};
// console.log(myData)
postData('http://localhost/unbundl/backend/frontendapi.php', myData).then(data=>{
    // console.log(data)
    if(data.status == 201){
        // console.log(data.userid,data.message)
       document.querySelector('.model-header h3').innerHTML =
              'Tank You For Your Responce' 
                setTimeout(()=>{
                    document.querySelector('.model').style.display = 'none'
                },2000)
    }else if(data.status == 400){
        //  console.log(data.message)
         document.querySelector('.model-header h3').innerHTML =
              'Some technical issue from server side!'
    }
});
}



document.addEventListener("DOMContentLoaded", (event) => {
document.querySelector('.model').addEventListener("click",(e)=>{
    console.log(e.target.className)
    if(e.target.className == "model"){
        document.querySelector('.model').style.display = 'none'
    }
})
});