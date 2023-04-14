function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

const itemPrice = 10;
const itemQuantity = 5;
const totalPrice = calculateTotalPrice(itemPrice, itemQuantity);

console.log(totalPrice);
