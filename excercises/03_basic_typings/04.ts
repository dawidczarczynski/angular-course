/**
 * Funkcja getTotalPrice przyjmuje tablicę obiektów produktów i zwraca sumę ich cen.
 */
function getTotalPrice(products) {
    return products.reduce((sum, product) => sum + product.price, 0);
}

const products = [
    { name: 'Shoes', price: 49.99 },
    { name: 'Shirt', price: 19.99 },
    { name: 'Pants', price: 29.99 },
];

console.log(getTotalPrice(products));
