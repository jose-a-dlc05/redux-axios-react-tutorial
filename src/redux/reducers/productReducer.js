import { ActionTypes } from '../constants/action-types';
const { SET_PRODUCTS, SELECTED_PRODUCT } = ActionTypes;

const initialState = {
	products: [
		{
			id: 1,
			title: 'Jose',
			category: 'Developer',
		},
	],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};

export default productReducer;
