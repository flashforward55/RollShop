export default class Model {
	constructor() {
		this.cart = [];
	}

	addToCart(product) {
		let productInCart;

		// Находим товар в корзине
		productInCart = this.cart.find(function (productInCart) {
			return productInCart.id === product.id;
		});

		if (productInCart) {
			productInCart.counter = productInCart.counter + product.counter;
		} else {
			const newProduct = JSON.parse(JSON.stringify(product));
			this.cart.push(newProduct);
		}

		console.log(this.cart);
	}

	getTotalCartPrice() {
		let totalPrice = 0;

		this.cart.forEach(function (item) {
			totalPrice = totalPrice + item.price * item.counter;
		});

		return totalPrice;
	}

    updateCounterInCart(id, action) {
		let productInCart;

		// Находим продукт в списке продуктов в корзине
		productInCart = this.cart.find((product) => {
			return id === product.id;
		});

		// При "+" - увеличиваем
		if (action === 'plus') {
			++productInCart.counter;
		}

		// При "-" - уменьшаем, но не меньше 1
		if (action === 'minus' && productInCart.counter > 0) {
			--productInCart.counter;
        }

        if (productInCart.counter === 0) {
            const index = this.cart.findIndex((item) => {
				return item.id === productInCart.id;
            });
			this.cart.splice(index, 1);
        }

        console.log(productInCart);
        console.log(this.cart);

	}
}