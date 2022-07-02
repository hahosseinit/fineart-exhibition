import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectollectionsForPreview = createSelector(
    //we get an array of the keys inside it
    collections => Object.keys(collections).map(key => collections[key])
)

// Data Normalization: Storing list of elements inside of an object instead of array
// we have optimized this query search and fast

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
        // collections => collections.find(
        //     // take ong time
        //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        // )
    );