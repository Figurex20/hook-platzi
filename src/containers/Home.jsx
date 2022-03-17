import React from 'react';
import initialState from '../initialState';
import { Products } from '../components/Imports';

function Home() {
	return <Products products={initialState.products} />;
}

export { Home };
