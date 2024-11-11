products = [ 
  { 
  img: "./assets/images/waffle.jpg",
  category:"Waffle", 
  name: "Waffle with Berries", 
  price: 6.50, 
  }, 

  {
  img:"./assets/images/bean.jpg",
  category:"Crème Brûlée",
  name: "Vanilla Bean Crème Brûlée", 
  price: 7.00,

  }, 

  { 
  img:"./assets/images/macaron.jpg",
  category:"Macaron", 
  name: "Macaron Mix of Five",
  price: 8.00, 
  }, 

  { 
  img:"./assets/images/tiramisu.jpg",
  category:"Tiramisu", 
  name: "Classic Tiramisu", 
  price: 5.50,
  }, 

  { 
  img:"./assets/images/baklava.jpg",
  category:"Baklava", 
  name: "Pistachio Baklava", 
  price: 4.00, 
  },

  { 
  img:"./assets/images/lemon-pie.jpg",
  category:"Pie", 
  name: "Lemon Meringue Pie", 
  price: 5.00, 
  },

  { 
  img:"./assets/images/red-cake.jpg",
  category:"Cake", 
  name: "Red Velvet Cake", 
  price: 4.50,
  },

  { 
  img:"./assets/images/brownie.jpg",
  category:"Brownie", 
  name: "Salted Caramel Brownie", 
  price: 5.50,
  },

  { 
  img:"./assets/images/panna.jpg",
  category:"Panna Cotta", 
  name: "Vanilla Panna Cotta", 
  price: 6.50,
  },
]
const productList = document.querySelector(".product-area");

const sBtn = document.querySelectorAll(".subBtn");
const aBtn = document.querySelectorAll(".addBtn");
const countBtn = document.querySelectorAll(".count-btn")

for(product of products) {
  productList.innerHTML += `  
  <div class="card">
    <img src="${product.img}">
    <button id="defaultCard"><img src="./assets/images/cart-icon.svg">Add to Cart</button>
    <p>${product.category}</p>
    <h4>${product.name}</h4>
    <span>${product.price}</span>
  </div>`



}
const aBtns = document.querySelectorAll(".addBtn");
const sBtns = document.querySelectorAll(".subBtn");
const countBtns = document.querySelectorAll(".countBtn");

for(const button of aBtns) {
  button.addEventListener("click", function() {
    countBtns.innerHTML =+ button;
  })
}



