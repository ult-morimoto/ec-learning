import { useProducts } from './useProducts.js';

document.addEventListener('DOMContentLoaded', async () => {
    const {
        fetchProducts,
        productItems
    } = useProducts();

    await fetchProducts();
    const productList = document.getElementById("product-list");
    if (!productList) return;

    productItems.forEach(productItem => {
        const item = document.createElement("div");
        item.classList.add("product-list__item");

        item.innerHTML = `
      <div class="product-list__image">
        <img src="${productItem.image}" alt="${productItem.title}">
      </div>
      <div class="product-list__info">
        <div class="product-list__title">${productItem.title}</div>
        <p class="product-list__description">${productItem.description}</p>
        <p class="product-list__price">$${productItem.price}</p>
      </div>
    `;

        productList.appendChild(item);
    });
});
