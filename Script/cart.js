// code for theitems of the cart
const cartItems = [
    { item: "The Fall of Icarus", price: 850000 },
    { item: "Gods, Goddesses, and Demi Gods in Olymus", price: 1270000 },
    { item: "Salome with the head of John the Baptist", price: 180000 },
    { item: "The Birth of Venus", price: 350000 }
];

// this is the fuction to display the items buyer has places in cart
function displayCartItems() {
    const cartItemsTable = document.querySelector("cartItems");
    cartItemsTable.innerHTML = ""; // this one takes all the items away (clearrs it)

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const itemRow = document.createElement("tr");

        const itemTitle = document.createElement("td");
        itemTitle.innerText = cartItems[i].item;

        const itemPrice = document.createElement("td");
        itemPrice.innerText = cartItems[i].price;

        const removeButton = document.createElement("input");
        removeButton.setAttribute("type", "button");
        removeButton.setAttribute("value", "Remove");
        removeButton.addEventListener("click", function() {
            removeItem(i);
        });

        itemRow.appendChild(itemTitle);
        itemRow.appendChild(itemPrice);
        itemRow.appendChild(removeButton);

        cartItemsTable.appendChild(itemRow); //Append - add extra titems to the end of the child nommer

        totalPrice += cartItems[i].price;
    }

    document.querySelector("totalPrice").innerText = totalPrice;
}

// thsi one is the functiom to delete items from the cart AS A BUYER NISH PLS
function removeItem(index) {
    cartItems.splice(index, 1);
    displayCartItems();
}

// this nommer just displays the items in the c=nommer
displayCartItems();