import { useState } from 'react';
import '../initialState';

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCar = (payload) => {
		setState({
			...state,
			cart: [...state, payload],
		});
	};

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter((item) => item.id !== payload),
		});
	};

	return {
		addToCar,
		removeFromCart,
		state,
	};
};

export { useInitialState };
