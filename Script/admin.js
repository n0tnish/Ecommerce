// the items of the array
let cartItems = [];

// the fuction to add the idems to the cart
function addItem(event) {
  event.preventDefault();

  // the code to pull the items and the price
  const itemName = document.getElementById('itemName').value;
  const itemPrice = document.getElementById('itemPrice').value;

  //the code to make the object item thingy
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

// fuctiion to display the items in the cart
function displayCartItems() {
  // this is the container for the element s in the cart which means all the items will be displayed in the cart. the selected items (querty selector does it but in this case, doc.getEleById does it)
  const cartItemsContainer = document.getElementById('cartItems');

  // this one empties out the container that the elements are in
  cartItemsContainer.innerHTML = "";

  // this loop is  to loop throuygh the elements in the cart. all the elements in the cart 
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    // this one just makes a div for the elements
    const itemDiv = document.createElement('div');

    // sets the item details as innerHTML of the div
    itemDiv.innerHTML = `
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Price:</strong> ${item.price}</p>
    `;

    // adds more items tp thee specific or selected parent element
    cartItemsContainer.appendChild(itemDiv);
  }
}

// this one just adds elevent listener to the form nommer
document.getElementById('addItemForm').addEventListener('submit', addItem);