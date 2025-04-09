import { fetchProducts  } from './api/products.js';

export function useApparelProducts() {
    const apparelItems = [];

    async function fetchApparelProducts() {
        try {
            apparelItems.push(...(await fetchProducts()));
        } catch (error) {
            console.error('商品データの取得に失敗しました:', error);
        }
    }

    return {
        apparelItems,

        // Action
        fetchApparelProducts,
    };
}
