import {list} from './api/productApi.js';

export function useProducts() {
    const products = [];

    async function fetchProducts() {
        try {
            products.push(...(await list()));
        } catch (error) {
            console.error('商品データの取得に失敗しました:', error);
        }
    }

    return {
        products,

        // Action
        fetchProducts,
    };
}
