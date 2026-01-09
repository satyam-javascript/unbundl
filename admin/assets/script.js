async function fetchData(url) {
  const response = await fetch(url); // Wait for the server response
  const data = await response.json(); // Wait for the response body to be 
 return data;
}

const postData = async (url, data,method) => {
  try {
            const response = await fetch(url, {
            method: method, 
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
                        <div class="adding"><button class="btn btn-adding" onclick="UpdatingProduct(${element.id})">Update</div>
                        </div>
                        </div>
    `;
})
}else{
    this.document.querySelector(""+elementSelect+"").innerHTML+=`<h2>Car Not Found! </h2>`
        return ;
}
}

function UpdatingProduct(ids){
fetchData(`http://localhost/unbundl/backend/backendapi.php?editid=${ids}`)
.then(datas=>{
    datas.forEach(data=>{
        document.querySelector('.header').classList.add('zindex-o')
document.querySelector('.model .btn.btn-form').setAttribute("id",data.id);
document.querySelector('.model').style.display = 'flex'
document.querySelector(".model .image-lin").value = data.image
document.querySelector(".image-area img").src = data.image
document.querySelector(".model .category").value = data.category
document.querySelector(".model .name").value = data.name
document.querySelector(".model .price").value = data.price    
})
})
   
}

                      
function Model(){
  document.querySelector('.model').style.display = 'flex' 
 document.querySelector('.header').classList.add('zindex-o')

}

function FromSend(element){
let id = element.id;
// document.querySelector('.model').style.display = 'flex'
let imagelink = document.querySelector(".model .image-lin")  
let categoryupdate = document.querySelector(".model .category")  
let name = document.querySelector(".model .name")  
let price = document.querySelector(".model .price")   

  document.querySelector('.model-header h3').innerHTML = 'Tank You For Your Responce'  

  
const myData = {
    id:id,
  imagelink:imagelink.value,
  name: name.value,
  price: price.value,
  categoryupdate:categoryupdate.value
};
postData('http://localhost/unbundl/backend/backendapi.php', myData,'PUT').then(data=>{
    console.log(data)
    if(data.status == 202){
        // console.log(data.userid,data.message)
       document.querySelector('.model-header h3').innerHTML = data.message;
               
                setTimeout(()=>{
                    document.querySelector('.model').style.display = 'none'
                    document.querySelector('.header').classList.remove('zindex-o')

                    fetchData("http://localhost/unbundl/backend/backendapi.php?searched=true")
                    .then((data)=>{
                    CardProduct(data,".searched-content")
                    })

                    fetchData("http://localhost/unbundl/backend/backendapi.php?latest=true")
                    .then((data)=>{
                    CardProduct(data,".latestcar-content")
                    })

                },2000)
    }else if(data.status == 400){
        //  console.log(data.message)
         document.querySelector('.model-header h3').innerHTML =
              'Some technical issue from server side!'
    }
});

    // setTimeout(()=>{
    //     document.querySelector('.model').style.display = 'none'
    // },2000)
}

document.addEventListener("DOMContentLoaded", (event) => {
document.querySelector('.model').addEventListener("click",(e)=>{
    console.log(e.target.className)
    if(e.target.className == "model"){
        document.querySelector('.model').style.display = 'none'
        document.querySelector('.header').classList.remove('zindex-o')

    }
})
});

function ChangeImage(image){
document.querySelector('.image-area .image').src = image.value;
}

function HeaderUpdate()
{
 fetchData("http://localhost/unbundl/backend/backendapi.php?header_menu=true")
.then((data)=>{
 let menuhtml = `<div class="headers-links">`;

    data.forEach(i=>{
      menuhtml+=`<div class="header-list">
      <a class="header-links" name="${i.name}" id="${i.id}" href="${i.link}" onclick="UpdateActionMenu(this);event.preventDefault();">${i.name}</a>
      <span class="remove-it-menu" onclick="RemoveMenu(${i.id})">X</span></div>`;
    })

menuhtml += `</div>`
    document.querySelector('.custom-updates').innerHTML = `
                <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title">Update Header</h2>
                    <p class="section-subtitle">Discover  carefully. </p>
                    <div class="menu-categories">
                    <div class="menu-category">
                        <h3>Add, Update and Remove</h3>
                        <div class="menu-items">
                            <div class="menu-item">
                            <div class="menu-item-info">
                                ${menuhtml}
                            </div>
                            <span class="addnewheader" onclick="AddActionMenu()">ADD+</span>
                            </div>
                            <div class="action-place">
                            </div>

                        </div>
                    </div>

                    </div>
                </div>
                </section>
    `
})
}
function HeroUpdate()
{
     fetchData("http://localhost/unbundl/backend/backendapi.php?hero_link=true")
.then((data)=>{
console.log(data)
 let menuhtml = '';
let linkone = '';
    data.forEach(i=>{
      menuhtml+=`<img src="${i.link}" id="${i.id}" alt="hero section image"/>`;
      linkone = i.link;

    })

    document.querySelector('.custom-updates').innerHTML = `
                    
                <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title">Update Hero</h2>
                    <p class="section-subtitle">Use alwasy image link address for find the image path. </p>
                    <div class="action-place">
                    <div class="updat-stage">
                    <input class="up-menu-id" type="hidden" hidden="" name="id" value="">
                    <input class="hero-menu-link" onchange="Changeherolink(this)" type="text" name="hero" value="${linkone}">
                    <button class="btn btn-secondery" onclick="Herosectionlink();">Update+</button>

                    </div>
                    </div>
                    <div class="menu-categories">
                        ${menuhtml}
                   </div>
                </section>
    `
})
}
function AboutUpdate()
{
     document.querySelector('.custom-updates').innerHTML = `
                    
                <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title">Update About</h2>
                    <p class="section-subtitle">Comming Soon</p>
                        <div class="menu-categories">
                            <div class="menu-category">
                                <h3>Informational</h3>
                                    <div class="menu-items">
                                            <div class="menu-item">
                                                <div class="menu-item-info">
                                                    <h4>List</h4>
                                                    <p>Listed...</p>
                                                </div>
                                            <span class="price">....</span>
                                            </div>
                                </div>
                        </div>
                </div>
                </section>
    `
}
function ContactUpdate()
{
     document.querySelector('.custom-updates').innerHTML = `
                    
                <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title">Update Contact Us</h2>
                    <p class="section-subtitle">Comming Soon</p>
                        <div class="menu-categories">
                            <div class="menu-category">
                                <h3>Informational</h3>
                                    <div class="menu-items">
                                            <div class="menu-item">
                                                <div class="menu-item-info">
                                                    <h4>List</h4>
                                                    <p>Listed...</p>
                                                </div>
                                            <span class="price">....</span>
                                            </div>
                                </div>
                        </div>
                </div>
                </section>
    `
}
 


function AddActionMenu(){
    
document.querySelector('.action-place').innerHTML=`
<div class="updat-stage">
<input class="up-menu-id" type="hidden" hidden name="id" value=""/>
<input class="up-menu-name" type="text" name="link" placeholder="Menu Name" value=""/>
<input class="up-menu-link" type="text" name="name" placeholder="Menu Link" value=""/>
                            <button class="btn btn-secondery" onclick="addmenusingel();">Add+</button>

</div>
`
}

function UpdateActionMenu(element){
    
document.querySelector('.action-place').innerHTML=`
<div class="updat-stage">
<input class="up-menu-id" type="hidden" hidden name="id" value="${element.id}"/>
<input class="up-menu-name" type="text" name="link" value="${element.name}"/>
<input class="up-menu-link" type="text" name="name" value="${element.href}"/>
                            <button class="btn btn-secondery" onclick="updatemenusingel();event.preventDefault();">Update+</button>

</div>
`
}





function addmenusingel(){
   let name =   document.querySelector('.up-menu-name') 
    let link =   document.querySelector('.up-menu-link') 

    let adddata = {
        addsinglemenu:true,
        name:name.value,
        link:link.value
    }

    postData('http://localhost/unbundl/backend/backendapi.php', adddata,'POST').then(data=>{
    console.log(data)
    if(data.status == 201){
        console.log(data)
         HeaderUpdate()
    } 
    })
}

function updatemenusingel(){
   let id =  document.querySelector('.up-menu-id')
   let name =   document.querySelector('.up-menu-name') 
    let link =   document.querySelector('.up-menu-link') 

    let updatedata = {
        updatedatas:true,
        id:id.value,
        name:name.value,
        link:link.value
    }

    postData('http://localhost/unbundl/backend/backendapi.php', updatedata,'PUT').then(data=>{
    if(data.status == 202){
        console.log(data)
        document.querySelector('.updat-stage button').innerHTML = `Updated`
        document.querySelector('.header-links[id="'+id.value+'"]').innerHTML = data.name
        document.querySelector('.header-links[name="'+id.value+'"]').href = data.link
        
    } 
    })
}

function RemoveMenu(removeid){
    const removedata = {
        removeid:true,
        id:removeid
    }
  postData('http://localhost/unbundl/backend/backendapi.php', removedata,'DELETE').then(data=>{
    console.log(data)
    if(data.status == 203){
        HeaderUpdate()
    }
    });
}


function Herosectionlink(){
   let link =  document.querySelector('.hero-menu-link').value
   let id =  document.querySelector('.menu-categories img').id

   const imageChange = {
        heroimage_change:true,
        id:id,
        link:link
    }
  postData('http://localhost/unbundl/backend/backendapi.php', imageChange,'PUT').then(data=>{
    console.log(data)
    if(data.status == 202){
        document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.section-subtitle').innerHTML = data.message;
     
    }
    });
}

function Changeherolink(element){
document.querySelector('.menu-categories img').src = element.value;
}

