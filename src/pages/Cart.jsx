import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import useCart from '../hooks/useCart';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import { useSelector } from 'react-redux';
import {tablet} from '../responsive'
import DeliveryContact from '../components/DeliveryContact';

const Container = styled.section`
	display: grid;
	grid-template-columns:1fr;
	gap: 1rem;

	${tablet({gridTemplateColumns: 'repeat(3,1fr)', gap:'5rem',margin:'5rem'})}
`
const Cart = () => {
	const cart = useSelector(state=>state.cart)
	// const { cart } = useCart();
	console.log(cart);
	return (
		<Container>
			<DeliveryContact/>
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
		</Container>
	);
};

export default Cart;
