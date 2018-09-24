const REDUX_STORE_CLEANER_NAME = '@@redux-store-cleaner';

export const CLEAN = `${REDUX_STORE_CLEANER_NAME}/CLEAN`;

/**
 * Cleans store with namespace. If namespace is not presented - clean all stores.
 * @param {string|undefined} namespace
 * @returns {{type: string, namespace: string|undefined }}
 */
export const cleanStore = namespace => ({ type: CLEAN, namespace });
