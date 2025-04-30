import { createProductElement } from '../pages/productsPage.js';

describe('商品一覧画面のテスト', () => {
    test('createProductElementにて一覧表示される商品のDOM要素が作成されること', () => {
        const mockProduct = {
            id: 10000,
            title: 'サンプル商品',
            description: 'これは説明です',
            price: 1000,
            image: 'test.jpg',
        };

        const element = createProductElement(mockProduct);

        expect(element).toBeInstanceOf(HTMLElement);
        expect(element.querySelector('.product-list__title').textContent).toBe('サンプル商品');
        expect(element.querySelector('img').src).toContain('test.jpg');
    });
});
