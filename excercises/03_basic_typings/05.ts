const discounts = [
    { code: 'FIRST10', discountPercentage: 10 },
    { code: 'SALE20', discountPercentage: 20 },
];

/**
 * Funkcja calculateTotalPrice przyjmuje obiekt zamówienia i zwraca sumę cen produktów, 
 * uwzględniając zniżkę, jeśli została zastosowana. 
 */
function calculateTotalPrice(order) {
    const { products, discountCode } = order;

    const discount = discounts.find((d) => d.code === discountCode);
    const discountMultiplier = 1 - (discount?.discountPercentage ?? 0) / 100;

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    return totalPrice * discountMultiplier;
}

const order = {
    id: 1,
    customerName: 'John Doe',
    products: [
        { name: 'Shoes', price: 49.99 },
        { name: 'Shirt', price: 19.99 },
        { name: 'Pants', price: 29.99 },
    ],
    discountCode: 'SALE20',
};

console.log(calculateTotalPrice(order));
