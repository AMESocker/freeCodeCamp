const cartContainer = document.getElementById('cart-container');
const productsContainer = document.getElementById('products-container');
const dessertCards = document.getElementById('dessert-card-container');
const cartBtn = document.getElementById('cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const totalNumberOfItems = document.getElementById('total-items');
const cartSubTotal = document.getElementById('subtotal');
const cartTaxes = document.getElementById('taxes');
const cartTotal = document.getElementById('total');
const showHideCartSpan = document.getElementById('show-hide-cart');
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaroon",
    price: 3.99,
    category: "Macaroon",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macaroons (4 Pack)",
    price: 9.99,
    category: "Macaroon",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macaroons (5 Pack)",
    price: 11.99,
    category: "Macaroon",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

products.forEach(
  ({ name, id, price, category }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  }
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id,products){
    const product = products.find((item)=>item.id === addItem.id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {}
    this.items.forEach((dessert)=>{
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id]||0) + 1;
    })
    
    const currentProductCount = totalCountPerProduct[product.id]
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);
    
    currentProductCount > 1 
    ? currentProductCountSpan.textContent = `${currentProductCount}x` 
    : productsContainer.innerHTML += `
    <div class="product" id="dessert${id}">
      <p>
        <span class="product-count" id="product-count-for-id${id}"></span>${name}
      </p>  
      <p>${price}</p>  
    </div>
    `; //?27
  }
};//?14,15,16

const cart = new ShoppingCart(); //?32
const addToCartBtns = document.getElementsByClassName('add-to-cart-btn');
[...addToCartBtns].forEach(
  (btn)=>{btn.addEventListener('click',(event)=>{
    cart.addItem()
  })}
  )

//?6 You now need to start adding products. Before you do that, you need to consider the structure of your product data. A product will need a unique identifier to distinguish it from other products, a price so people know how much it costs, and a name so people know what they are buying. You should also add a category to each product.

//?14 You are already familiar with an HTML class, but JavaScript also has a class. In JavaScript, a class is like a blueprint for creating objects. It allows you to define a set of properties and methods, and instantiate (or create) new objects with those properties and methods.The class keyword is used to declare a class. Here is an example of declaring a Computer class:
//class Computer {};

//?15 Classes have a special constructor method, which is called when a new instance of the class is created. The constructor method is a great place to initialize properties of the class. Here is an example of a class with a constructor method:
/*
class Computer {
  constructor() {
  }
} */

//?16 The 'this' keyword in JavaScript is used to refer to the current object. Depending on where 'this' is used, what it references changes. In the case of a class, it refers to the instance of the object being constructed. You can use the 'this' keyword to set the properties of the object being instantiated. Here is an example:
/*
class Computer {
  constructor() {
    this.ram = 16;
  }
} */

//? 27 The behavior of the 'addItem' method needs to change if the product is already in the cart or not. Create a ternary that checks if the current product is already in the cart. Use 'undefined' for both the truthy and falsy expressions to avoid a syntax error.

//? 32 There is still more functionality that your ShoppingCart class needs, but first you need to be able to test the code you have currently written. You'll need to instantiate a new ShoppingCart object and assign it to a variable. Here is an example of instantiating the Computer class from earlier examples:
//const myComputer = new Computer();
