function addToCart(name, price) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

function displayCart() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cart-items");
  let total = 0;

  if (!cartItems) return;

  cartItems.innerHTML = "";

  cart.forEach(function(item) {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

displayCart();

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}