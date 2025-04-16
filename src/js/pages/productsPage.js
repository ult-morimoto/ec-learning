import { useProducts } from '../useProducts.js';

document.addEventListener('DOMContentLoaded', async () => {
    const {
        fetchProducts,
        getProducts,
    } = useProducts();

    await fetchProducts();
    const productList = document.getElementById("product-list");
    if (!productList) return;

    getProducts().forEach(product => {
        const item = document.createElement("div");
        item.classList.add("product-list__item");

        item.innerHTML = `
      <div class="product-list__image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-list__info">
        <div class="product-list__title">${product.title}</div>
        <p class="product-list__description">${product.description}</p>
        <p class="product-list__price">$${product.price}</p>
      </div>
    `;

        productList.appendChild(item);
    });
});
