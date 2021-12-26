import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../../components/CardTotal/CartTotal';

const Cart = () => {
	const { cart } = useCart();
	console.log(cart);
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				{cart.map((item) => (
					<CartItem item={item} key={item._id} />
				))}
			</div>
			<div className={styles.right}>
				<CartTotal cart={cart}>
					<Link to={'/order'}>
						<button className={styles.button}>Pay</button>
					</Link>
				</CartTotal>
			</div>
		</div>
	);
};

export default Cart;
