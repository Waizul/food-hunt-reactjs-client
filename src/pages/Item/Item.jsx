import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import useCart from '../../hooks/useCart';
import { addToLocalStorage } from '../../localStorage/localStorage';
import styles from './Item.module.css';

const Item = () => {
	const [item, setItem] = useState({});
	const [quantity, setQuantity] = useState(1);
	const { id } = useParams();
	const { cart, setCart } = useCart();
	// console.log(cart);
	useEffect(() => {
		const url = `http://localhost:5000/items/${id}`;
		fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setItem(data));
	}, [id]);
	console.log(item);
	let price = parseInt(item?.price);

	let [newPrice, setNewPrice] = useState(price);

	const handleQuantity = (sign) => {
		if (sign === '-' && quantity > 1) {
			setQuantity(quantity - 1);
			price = price * quantity - price;
			setNewPrice(price);
		}
		if (sign === '+') {
			setQuantity(quantity + 1);
			price = price + price * quantity;
			setNewPrice(price);
		}
	};

	const handleAddToCart = (item, quantity) => {
		const exists = cart.find((itm) => itm._id === item._id);
		let newCart = [];
		if (exists) {
			const rest = cart.filter((itm) => itm._id !== item._id);
			exists.quantity = quantity;
			newCart = [...rest, item];
		} else {
			item.quantity = quantity;
			newCart = [...cart, item];
		}
		setCart(newCart);
		addToLocalStorage(item._id, quantity);
	};

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.imgContainer}>
						<img
							src={item?.imgUrl}
							alt=''
							className={styles.imgItem}
						/>
						<p className={styles.desc}>{item?.desc}</p>
					</div>
				</div>
				<div className={styles.right}>
					<h1 className={styles.title}>{item?.title}</h1>
					<span className={styles.price}>${item?.price}</span>
					<h3 className={styles.choose}>
						Choose additional ingredients
					</h3>
					<div className={styles.ingredients}>
						<div className={styles.option}>
							<input
								className={styles.checkbox}
								type='checkbox'
								id='cheese'
								name='cheese'
							/>
							<label htmlFor='cheese'>Extra Cheese</label>
						</div>
						<div className={styles.option}>
							<input
								className={styles.checkbox}
								type='checkbox'
								id='spicy'
								name='spicy'
							/>
							<label htmlFor='spicy'>Spicy Sauce</label>
						</div>
						<div className={styles.option}>
							<input
								className={styles.checkbox}
								type='checkbox'
								id='garlic'
								name='garlic'
							/>
							<label htmlFor='garlic'>Garlic Sauce</label>
						</div>
					</div>
					<div className={styles.addCart}>
						<p className={styles.price}>${newPrice}</p>
						<div className={styles.add}>
							<span onClick={() => handleQuantity('-')}>-</span>
							<input
								type='number'
								defaultValue={1}
								value={quantity}
								className={styles.quantity}
							/>
							<span onClick={() => handleQuantity('+')}>+</span>
						</div>
						<button
							className={styles.button}
							onClick={() => handleAddToCart(item, quantity)}
						>
							Add to Cart
						</button>
					</div>
					<Link to={'/cart'}>
						<button className={styles.button}>
							Proceed to Payment
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Item;
