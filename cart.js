// Sample product data
const products = [
  { id: 1, name: "Apple", price: 0.5 },
  { id: 2, name: "Banana", price: 0.3 },
  { id: 3, name: "Cherry", price: 1.0 }
];

// Cart array to hold items
let cart = [];

// Function to add item to cart
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (product) {
      const cartItem = cart.find(item => item.product.id === productId);
      if (cartItem) {
          cartItem.quantity += quantity; // Update quantity if item already in cart
      } else {
          cart.push({ product, quantity }); // Add new item to cart
      }
      updateCartDisplay();
  }
}

// Function to remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCartDisplay();
}

// Function to update item quantity in cart
function updateQuantity(productId, newQuantity) {
  const cartItem = cart.find(item => item.product.id === productId);
  if (cartItem) {
      cartItem.quantity = newQuantity;
      if (cartItem.quantity <= 0) {
          removeFromCart(productId); // Remove item if quantity is zero
      } else {
          updateCartDisplay();
      }
  }
}

// Function to calculate total price
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
}

// Function to update cart display
function updateCartDisplay() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = ''; // Clear previous items
  cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
          <span>${item.product.name} - $${item.product.price} x ${item.quantity}</span>
          <button onclick="removeFromCart(${item.product.id})">Remove</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
  });
  const totalPriceDiv = document.getElementById('total-price');
  totalPriceDiv.innerHTML = `Total Price: $${calculateTotal()}`;
}

// Sample usage
addToCart(1, 2); // Add 2 Apples
addToCart(2, 3); // Add 3 Bananas
addToCart(3, 1); // Add 1 Cherry