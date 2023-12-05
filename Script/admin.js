// Cart items array
let cartItems = [];

// Function to add item to the cart
function addItem(event) {
  event.preventDefault();

  // Get the input values
  const itemName = document.getElementById('itemName').value;
  const itemPrice = document.getElementById('itemPrice').value;

  // Create an object for the item
  const item = {
    name: itemName,
    price: itemPrice
  };

  // Add the item to the cart items array
  cartItems.push(item);

  // Clear the input fields
  document.getElementById('itemName').value = "";
  document.getElementById('itemPrice').value = "";

  // Display the cart items
  displayCartItems();
}

// Function to display the cart items
function displayCartItems() {
  // Get the cart items container element
  const cartItemsContainer = document.getElementById('cartItems');

  // Clear the cart items container
  cartItemsContainer.innerHTML = "";

  // Loop through each item in the cart items array
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    // Create a div element for the item
    const itemDiv = document.createElement('div');

    // Set the item details as innerHTML of the div
    itemDiv.innerHTML = `
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Price:</strong> ${item.price}</p>
    `;

    // Append the item div to the cart items container
    cartItemsContainer.appendChild(itemDiv);
  }
}

// Add event listener to the add item form
document.getElementById('addItemForm').addEventListener('submit', addItem);