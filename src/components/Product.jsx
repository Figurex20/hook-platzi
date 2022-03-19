import React from 'react';

function Product({ product }) {
	const { image, title, price, description } = product;
	return (
		<div className="Products-item">
			<img src={image} alt={title} />
			<div className="Product-item-info">
				<h2>
					{title}
					<span>${price}</span>
				</h2>
				<p>{description}</p>
			</div>
			<button type="button">Comrpar</button>
		</div>
	);
}

export { Product };