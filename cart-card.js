// Grab elements by id
const cartCountEl = document.getElementById("cart-count"); // result of the count
const statusEl = document.getElementById("status");  // result of the status
const addBtn = document.getElementById("add-btn");  // button to add to cart
const statusBtn = document.getElementById("status-btn"); // button to toggle status

// State
let cartCount = 0; // updater.. it holds the initial value which is 0 
//  and also responsible for updating the value of the cart




let isActive = false;


// Add to cart: bumps the nav counter
addBtn.addEventListener("click", function () {
  cartCount++;
  cartCountEl.textContent = "(" + cartCount + ")";
});

// Toggle status: switches the card between Pending and Active
statusBtn.addEventListener("click", function () {
  isActive = !isActive;

  if (isActive) {
    statusEl.textContent = "Active";
    statusEl.classList.remove("border-amber-400", "text-amber-800");
    statusEl.classList.add("border-green-500", "text-green-800");
  } else {
    statusEl.textContent = "Pending";
    statusEl.classList.remove("border-green-500", "text-green-800");
    statusEl.classList.add("border-amber-400", "text-amber-800");
  }
});
