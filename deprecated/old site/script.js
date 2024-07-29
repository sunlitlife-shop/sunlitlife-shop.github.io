

// CART FUNCTIONALITY ---------------------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Call updateCartDropdown and updateCartCount when the page loads
document.addEventListener('DOMContentLoaded', () => {
  updateCartDropdown();
  updateCartCount();
});

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const button = event.target;
    const product = {
      id: button.getAttribute('data-product-id'),
      name: button.getAttribute('data-product-name'),
      price: button.getAttribute('data-product-price'),
      image: button.getAttribute('data-product-image'), // Include image URL
      quantity: 1
    };

    addToCart(product);
    updateCartDropdown();
    showCartNotification(product); // Call to show the notification
  });
});

function addToCart(product) {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function showCartNotification(product) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
      <p>${product.quantity} x ${product.name} added to cart</p>
  `;
  document.body.appendChild(notification);

  // Animation to slide in and then remove the notification
  setTimeout(() => notification.classList.add('slide-in'), 100);
  setTimeout(() => {
      notification.classList.remove('slide-in');
      notification.remove();
  }, 3000);
}

function updateCartCount() {
  const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
  document.querySelector('.cart-count').textContent = cartCount;
}

function updateCartDropdown() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = ''; // Clear existing items

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<li>Your cart is empty</li>';
  } else {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('cart-item');
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        ${item.name} - $${item.price} x ${item.quantity}
        <button class="decrement-cart-item" data-product-id="${item.id}">-</button>
      `;
      cartItemsContainer.appendChild(li);
    });

    // Re-attach event listeners to the decrement buttons
    document.querySelectorAll('.decrement-cart-item').forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the click from bubbling up
        const productId = event.target.getAttribute('data-product-id');
        decrementCartItem(productId);
        updateCartDropdown(); // Update the cart items
      });
    });
  }

}

document.querySelector('.cart-icon').addEventListener('click', () => {
  const dropdown = document.querySelector('.cart-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.cart-dropdown').addEventListener('click', (event) => {
  event.stopPropagation();
});

document.querySelectorAll('.decrement-cart-item').forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the click from bubbling up

    const productId = event.target.getAttribute('data-product-id');
    decrementCartItem(productId);
    updateCartDropdown();
    // Keep the cart dropdown visible
    document.querySelector('.cart-dropdown').style.display = 'block';
  });
});

// Run on load to update cart from localStorage
updateCartCount();
updateCartDropdown();


function decrementCartItem(productId) {
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
    cart[productIndex].quantity -= 1;
    if (cart[productIndex].quantity <= 0) {
      cart.splice(productIndex, 1); // Remove the item if quantity is 0
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    updateCartCount(); // Update the cart count
  }
}



// SCROLLING FUNCTIONALITY --------------------------------

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
       // Scroll Down
       document.querySelector('header').classList.add('header-hidden');
   } else {
       // Scroll Up
       document.querySelector('header').classList.remove('header-hidden');
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

