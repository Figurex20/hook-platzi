import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

function Checkout() {
	const {
		state: { cart },
		removeFromCart,
	} = useContext(AppContext);

	const handleRemove = (product) => () => {
		removeFromCart(product);
	};

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) =>
			accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<div className="Checkout">
			<div className="Checkout-content">
				{cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos</h3>}
				{cart.map((item) => (
					<div className="Checkout-item">
						<div className="Checkout-element">
							<h4>{item.title}</h4>
							<span>{item.price}</span>
						</div>
						<button type="button">
							<i
								className="fas fa-trash-alt"
								title="Eliminar"
								onClick={handleRemove(item)}
							/>
						</button>
					</div>
				))}
			</div>
			{cart.length > 0 && (
				<div className="Checkout-sidebar">
					<h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
					<Link to="/checkout/information">
						<button type="button">Continuar con el pedido</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export { Checkout };
