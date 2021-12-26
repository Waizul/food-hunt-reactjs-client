import styles from './CartTotal.module.css';

const CartTotal = ({ cart, children }) => {
	console.log(cart);
	let total = 0;
	let totalQuantity = 0;

	for (const item of cart) {
		if (!item.quantity) {
			item.quantity = 1;
		}
		total = total + item.price * item.quantity;
		totalQuantity = totalQuantity + item.quantity;
		console.log(item.price);
	}
	return (
		<div>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>CART TOTAL</h2>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Subtotal:</b>$
					{total.toFixed(2)}
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Tax:</b>$0.00
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Delivery Fee:</b>$0.00
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Discount:</b>$0.00
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Total:</b>$
					{total.toFixed(2)}
				</div>
				{children}
			</div>
		</div>
	);
};

export default CartTotal;
