let recipes=[
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "BBA Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 3.6
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 1.5
    }
]
console.log(recipes[0].rating);
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
btn1.addEventListener("click",onclick);
btn2.addEventListener("click",onclick);
btn3.addEventListener("click",onclick);

let sortform=document.querySelector("form");
sortform.addEventListener("change",onclick);



function onclick(event){
    let sorttype=sortform.radio.value;
let above= 4;
let below=3.9;
   let data=event.target.value;
    let  filteredRecipes=recipes;
 if(data!=="all"){
    filteredRecipes=recipes.filter((recipe)=>
      recipe.type==data);  
}
if(sorttype==above){
    filteredRecipes=recipes.filter((recipe)=>
      recipe.rating>=above); 
      if(data!=="all"){
        filteredRecipes=filteredRecipes.filter((recipe)=>
          recipe.type==data);  
    }    
}else if(sorttype==below){
    filteredRecipes=recipes.filter((recipe)=>
      recipe.rating<above); 
      if(data!=="all"){
        filteredRecipes=filteredRecipes.filter((recipe)=>
          recipe.type==data);  
    }   
} 

createArray( filteredRecipes);

}


function createArray(recipestype){

    container.innerHTML="";
    recipestype.forEach((element)=>{
       container.appendChild(creatediv(element));
    })
    }

function creatediv(recipe){
      let div =document.createElement("div");
      div.className="card";
      div.innerHTML = `
      <img class="iimg" src="${recipe.imageSrc}" alt="${recipe.name}">
      <p>${recipe.type}</p>
      
    <div class="jc">
      <h2 class="h">${recipe.name}</h2>
      <p>${recipe.rating}</p> 
      </div>

      <div class="jc">
      <p class="p">${recipe.time}</p>
      <img class="like-button" ${recipe.isLiked ? 'src="source_icons/like.png"' : 'src="source_icons/like.png"'} >
      </div>
  `;
  return div;
}




let container=document.querySelector(".container");

createArray(recipes);


/*  for search  */

let search = document.querySelector(".ssearch");
search.addEventListener("keyup",onkeyup);

function onkeyup(){
    let sel=search.value.toUpperCase();
    let card=container.querySelectorAll(".card");
    
    for(let i=0; i<card.length; i++){
        let name=card[i].querySelector(".jc");
        
        let h=name.querySelector(".h");
        if(h) {
            let inner=h.innerHTML.toUpperCase();  
            if(inner.indexOf(sel)>-1){
              card[i].style.display="";  
            }else{
                card[i].style.display="none";   
            }
        }
    }
}
let nav=document.querySelector(".nav");

let hamburger=document.querySelector(".hide");
hamburger.addEventListener("click",()=>{
    let div=document.createElement("div");
    div.classList.add("hero");
    div.innerHTML=`<div class="icons">
                    <img src="source_icons/Cookpal 1.png"  alt="pic">
                  </div>
<div class="home">
 <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Explore</a></li>
    <li><a href="#">Help</a></li>
 </ul>
  
</div>`
nav.appendChild(div);
})
console.log(hamburger);