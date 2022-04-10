import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './CartTotal.module.css';
const Container = styled.div`
	flex: 1;
	/* margin-left: 6rem; */
	align-self:flex-end;
	justify-self: end;
`
const Button = styled.button`
    margin-top: 1rem;
	padding: 10px 20px;
	background-color: crimson;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;

`
const CartTotal = ({ total, children }) => {
	const tax = total * 0.15
	const deliveryFee = 1
	const discount = total * 0.1
const grandTotal = (total + tax + deliveryFee - discount)
	return (
		<Container>
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
				{/* {children} */}
				<Link to='/delivery'>

				<Button>Place Order</Button>
				</Link>
			</div>
		</Container>
	);
};

export default CartTotal;
