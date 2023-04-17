import ProductsModel from './products/model.js';
import * as productsView from './products/view.js'

const productsModel = new ProductsModel();

// Асинхронная ф-я getAndRenderProducts
// 1. Сначала получение товаров из JSON файла
// 2. Только после этого - отображение товаров на странице
async function getAndRenderProducts() {
    await productsModel.loadProducts();
    productsView.renderProducts(productsModel.products);
}

getAndRenderProducts();

productsView.elements.productsContainer.addEventListener('click', function (event) {
	// Совершаемое действие
	let action = event.target.dataset.action;

	// Если кликнули по счетчику внутри товаров
    if (action === 'plus' || action === 'minus') {
		// Находим ID продукта
		const productId = +event.target.closest('.card').dataset.id;

		// Запускаем модель для изменения счетчика
        productsModel.updateCounter(productId, action);
	}
})
