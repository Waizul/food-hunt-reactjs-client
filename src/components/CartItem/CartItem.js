import { useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
	// const [quantity, setQuantity] = useState(1);
	// const [reNewPrice, setReNewPrice] = useState(0);
	console.log(item);
	let newPrice = item?.price;

	// const handleQuantity = (sign) => {
	// 	if (sign === '-' && quantity > 1) {
	// 		setQuantity(quantity - 1);
	// 		newPrice = newPrice * quantity - newPrice;
	// 		setReNewPrice(newPrice);
	// 	}
	// 	if (sign === '+') {
	// 		setQuantity(quantity + 1);
	// 		newPrice = newPrice + newPrice * quantity;
	// 		setReNewPrice(newPrice);
	// 	}
	// };
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<img src={item?.imgUrl} width={100} height={100} alt='' />
				<div className={styles.textWrapper}>
					<h5 className={styles.title}>{item.title}</h5>
					<p className={styles.price}>${item.price}</p>
					<p>Qtn: {item.quantity}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
