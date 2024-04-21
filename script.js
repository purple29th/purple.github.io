let cart = [];

function addToCart(productName, price) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === productName) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x ${item.quantity} - $${(
      item.price * item.quantity
    ).toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price * item.quantity;
  });

  const totalElement = document.getElementById("cart-total");
  totalElement.textContent = total.toFixed(2);

  const cartSection = document.getElementById("cart");
  if (cart.length > 0) {
    cartSection.style.display = "block";
  } else {
    cartSection.style.display = "none";
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some items before checkout.");
  } else {
    let confirmation = "You have purchased:\n";
    cart.forEach((item) => {
      confirmation += `${item.name} x ${item.quantity}\n`;
    });
    confirmation += `\nTotal: $${
      document.getElementById("cart-total").textContent
    }`;

    alert(confirmation);
    cart = [];
    updateCart();
  }
}
