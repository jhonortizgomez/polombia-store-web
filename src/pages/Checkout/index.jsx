import React from 'react';
import { OrderItem } from '../../components/OrderItem';
import './Checkout.scss';

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="Checkout-container__title">My order</h1>
				<div className="Checkout-container__content">
					<div className="Checkout-container__content-order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export { Checkout }; 