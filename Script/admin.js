// the items of the array
let cartItems = [];

// the function to add the items to the cart
function addItem(event) {
  event.preventDefault();

  // the code to pull the items and the price
  const itemName = document.getElementById('itemName').value;
  const itemPrice = document.getElementById('itemPrice').value;

  // the code to make the object item thingy
  const item = {
    name: itemName,
    price: itemPrice
  };

  // the code to add or "push" items into an array
  cartItems.push(item);

  // code to empty the input
  document.getElementById('itemName').value = "";
  document.getElementById('itemPrice').value = "";

  // code to display the items (all)
  displayCartItems();
}

// function to delete an item from the cart
function deleteItem(index) {
  cartItems.splice(index, 1);
  displayCartItems();
}

// function to replace the price of an item
function replacePrice(index, newPrice) {
  cartItems[index].price = newPrice;
  displayCartItems();
}

// function to display the items in the cart
function displayCartItems() {
  // this is the container for the elements in the cart which means all the items will be displayed in the cart. the selected items (querySelector does it but in this case, getElementById does it)
  const cartItemsContainer = document.getElementById('cartItems');

  // this one empties out the container that the elements are in
  cartItemsContainer.innerHTML = "";

  // this loop is to loop through the elements in the cart, all the elements in the cart
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    // create a div for each item
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      Name: ${item.name}
      Price: ${item.price}
      <button onclick="deleteItem(${i})">Delete</button>
      <button onclick="replacePrice(${i}, prompt('Enter new price:'))">Replace Price</button>
    `;

    // adds more items to the specific or selected parent element
    cartItemsContainer.appendChild(itemDiv);
  }
}

// this one just adds event listener to the form
document.getElementById('addItemForm').addEventListener('submit', addItem);