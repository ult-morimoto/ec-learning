import {list} from './api/products.js';

export function useProducts() {
    const productItems = [];

    async function fetchProducts() {
        try {
            productItems.push(...(await list()));
        } catch (error) {
            console.error('商品データの取得に失敗しました:', error);
        }
    }

    return {
        productItems,

        // Action
        fetchProducts,
    };
}
