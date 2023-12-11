// the items of the array
let cartItems = [];

// function to check if localStorage is available
function isLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
}

// function to add the items to the cart
function addItem(event) {
  event.preventDefault();

  // the code to pull the items and the price
  const itemName = document.querySelector('#itemName').value;
  const itemPrice = document.querySelector('#itemPrice').value;

  // the code to make the object item thingy
  const item = {
    name: itemName,
    price: itemPrice
  };

  // the code to add or "push" items into an array
  cartItems.push(item);

  // code to empty the input
  document.querySelector('#itemName').value = "";
  document.querySelector('#itemPrice').value = "";

  // code to display the items (all)
  displayCartItems();

  // save the updated cartItems to localStorage
  if (isLocalStorageAvailable()) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}

// function to delete an item from the cart
function deleteItem(index) {
  cartItems.splice(index, 1);
  displayCartItems();
  
  // save the updated cartItems to localStorage
  if (isLocalStorageAvailable()) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}

// function to replace the price of an item
function replacePrice(index, newPrice) {
  cartItems[index].price = newPrice;
  displayCartItems();
  
  // save the updated cartItems to localStorage
  if (isLocalStorageAvailable()) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}

// function to display the items in the cart
function displayCartItems() {
  // this is the container for the elements in the cart which means all the items will be displayed in the cart. the selected items (querySelector does it but in this case, getElementById does it)
  const cartItemsContainer = document.getElementById('cartItems');

  // this one empties out the container that the elements are in
  cartItemsContainer.innerHTML = "";

  // this loop is to loop through the elements in the cart, all the elements in the cart
  for (let i = 0; i < cartItems.length; i++) {
    // create a div for each item
    const itemDiv = document.createElement('div');

    // set the class for the item div
    itemDiv.className = 'cart-item';

    // fill the div with the item details
    itemDiv.innerHTML = `
      Item Name: ${cartItems[i].name} <br>
      Item Price: ${cartItems[i].price} <br>
      <button onclick="deleteItem(${i})">Delete</button>
      <input type="text" id="newPrice-${i}">
      <button onclick="replacePrice(${i}, document.getElementById('newPrice-${i}').value)">Replace Price</button>
    `;

    // adds more items to the specific or selected parent element
    cartItemsContainer.appendChild(itemDiv);
  }
}

// function to load the cartItems from localStorage
function loadCartItems() {
  if (isLocalStorageAvailable()) {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems);
      displayCartItems();
    }
  }
}

// this one just adds event listener to the form
document.getElementById('addItemForm').addEventListener('submit', addItem);

// load the cartItems on page load
loadCartItems();