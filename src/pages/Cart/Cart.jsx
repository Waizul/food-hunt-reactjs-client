import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import useCart from '../../hooks/useCart';

const Cart = () => {
	const { cart } = useCart();
	console.log(cart);
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Product</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
					<tr className={styles.tr}>
						<td>
							<div className={styles.imgContainer}>
								{/* <img src={} alt='' /> */}
							</div>
						</td>
						<td>
							<span className={styles.name}></span>
						</td>
						<td>
							<span className={styles.extras}>
								Double ingredient, spicy sauce
							</span>
						</td>
						<td>
							<span className={styles.price}>${}</span>
						</td>
						<td>
							<span className={styles.quantity}>
								{cart.length}
							</span>
						</td>
						<td>
							<span className={styles.total}></span>
						</td>
					</tr>
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>CART TOTAL</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Subtotal:</b>$79.60
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Discount:</b>$0.00
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Total:</b>$79.60
					</div>
					<Link to={'/order'}>
						<button className={styles.button}>Pay</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
