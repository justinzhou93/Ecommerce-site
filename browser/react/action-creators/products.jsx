import axios from 'axios';

/** Constants */
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
export const REMOVE_SINGLE_PRODUCT = 'REMOVE_SINGLE_PRODUCT';

/** Action-creators */
const settingProductList = (products) => {
    return {
        type: SET_PRODUCT_LIST,
        productList: products
    }
}

const setSingleProduct = (product) => {
    return {
        type: SET_SINGLE_PRODUCT,
        currentProduct: product
    }
}

const removeProduct = () => {
    return {
        type: REMOVE_SINGLE_PRODUCT
    }
}

/** Thunk actions */

// load all products
export const loadAllProducts = () => {
    return dispatch => {
        axios.get('/api/products')
            .then((res => res.data))
            .then((products) => {
                console.log(products);
                dispatch(settingProductList(products));
            });
    }
};


// loads single product
export const loadSingleProduct = (productId) => {
    return dispatch => {
        axios.get(`/api/products/${productId}`)
            .then((res => res.data))
            .then((product) => {
                dispatch(setSingleProduct(product));
            });
    }
}

/** ADMIN thunks */



