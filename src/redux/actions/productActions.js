// import Action Types from constants
// create two action creators: SET_PRODUCTS & SELECTED_PRODUCT
import { ActionTypes } from '../constants/action-types';
const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: SELECTED_PRODUCT,
		payload: product,
	};
};

export const removeSelectedProduct = () => {
	return {
		type: REMOVE_SELECTED_PRODUCT,
	};
};
