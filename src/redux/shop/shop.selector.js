import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParams =>
    createSelector(
        [selectShopCollection],
        collections => collections[collectionUrlParams]
    );


export const selectCollectionsForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)