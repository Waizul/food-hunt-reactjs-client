import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../../components/CardTotal/CartTotal';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cart = useSelector(state=>state.cart)
	// const { cart } = useCart();
	console.log(cart);
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				{cart?.items.map((item) => (
					<CartItem item={item} key={item._id} />
				))}
			</div>
			<div className={styles.right}>
				<CartTotal total={cart.total}>
					<Link to={'/order'}>
						<button className={styles.button}>Pay</button>
					</Link>
				</CartTotal>
			</div>
		</div>
	);
};

export default Cart;
