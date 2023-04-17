export default class Model {
    constructor() {
        this.cart = [];
    }

    addToCart(product) {
        const newProduct = JSON.parse(JSON.stringify(product));
        this.cart.push(newProduct);
    }
}