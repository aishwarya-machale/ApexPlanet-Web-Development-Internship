document.addEventListener("DOMContentLoaded", function(){

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const container = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");

let count = 0;

function getProducts(){
return Array.from(document.querySelectorAll(".product-card"));
}


container.addEventListener("click", function(e){

if(e.target.classList.contains("add-btn")){
count++;
cartCount.innerText = count;
}

});


searchInput.addEventListener("input", function(){

let value = this.value.toLowerCase();

getProducts().forEach(function(product){

let name = product.dataset.name.toLowerCase();

if(name.includes(value)){
product.classList.remove("hide");
}else{
product.classList.add("hide");
}

});

});


// CATEGORY FILTER
categoryFilter.addEventListener("change", function(){

let category = this.value;

getProducts().forEach(function(product){

if(category === "all" || product.dataset.category === category){
product.classList.remove("hide");
}else{
product.classList.add("hide");
}

});

});


// SORT
sortPrice.addEventListener("change", function(){

let products = getProducts();

if(this.value === "low"){

products.sort(function(a,b){
return Number(a.dataset.price) - Number(b.dataset.price);
});

}
else if(this.value === "high"){

products.sort(function(a,b){
return Number(b.dataset.price) - Number(a.dataset.price);
});

}

products.forEach(function(product){
container.appendChild(product);
});

});

});