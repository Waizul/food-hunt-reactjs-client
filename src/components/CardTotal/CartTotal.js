import styles from './CartTotal.module.css';

const CartTotal = ({ total, children }) => {
	const tax = total * 0.15
	const deliveryFee = 1
	const discount = total * 0.1
const grandTotal = (total + tax + deliveryFee - discount)
	return (
		<div>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>CART TOTAL</h2>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Subtotal:</b>$
					{total.toFixed(2)}
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Tax:</b>${tax.toFixed(2)}
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Delivery Fee:</b>${deliveryFee.toFixed(2)}
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Discount:</b>${discount.toFixed(2)}
				</div>
				<div className={styles.totalText}>
					<b className={styles.totalTextTitle}>Total:</b>$
					{grandTotal.toFixed(2)}
				</div>
				{children}
			</div>
		</div>
	);
};

export default CartTotal;
