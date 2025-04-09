import { useApparelProducts } from './useApparelProducts.js';

document.addEventListener('DOMContentLoaded', async () => {
    const {
        fetchApparelProducts,
        apparelItems
    } = useApparelProducts();

    await fetchApparelProducts();
    const apparelList = document.getElementById("apparel-list");
    if (!apparelList) return;

    apparelItems.forEach(apparelItem => {
        const item = document.createElement("div");
        item.classList.add("apparel-list__item");

        item.innerHTML = `
      <div class="apparel-list__image">
        <img src="${apparelItem.image}" alt="${apparelItem.title}">
      </div>
      <div class="apparel-list__info">
        <div class="apparel-list__title">${apparelItem.title}</div>
        <p class="apparel-list__description">${apparelItem.description}</p>
        <p class="apparel-list__price">$${apparelItem.price}</p>
      </div>
    `;

        apparelList.appendChild(item);
    });
});
