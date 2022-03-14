import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Home,
	Checkout,
	Information,
	Payment,
	Success,
	NotFound,
} from '../containers/Imports';
import { Layout } from '../components/Imports';
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/checkout/information" element={<Information />} />
					<Route path="/checkout/payment" element={<Payment />} />
					<Route path="/checkout/success" element={<Success />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
