import ProductsModel from './products/model.js';

const productsModel = new ProductsModel();

console.log(productsModel);

// Асинхронная ф-я getAndRenderProducts
// 1. Сначала получение товаров из JSON файла
// 2. Только после этого - отображение товаров на странице
async function getAndRenderProducts() {
    await productsModel.loadProducts();
    console.log(productsModel);
}

 getAndRenderProducts();
