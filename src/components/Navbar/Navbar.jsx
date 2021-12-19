import React from 'react';
import styles from './Navbar.module.css';
import telImg from '../../image/sign/telephone.png';
import cartImg from '../../image/sign/cart.png';

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<img src={telImg} alt='telephone' width='32' height='32' />
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>ORDER NOW</div>
					<div className={styles.text}>01000000000</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<li className={styles.listItem}></li>
					<li className={styles.listItem}>Home</li>
					<li className={styles.listItem}>Products</li>
					<li className={styles.listItem}>Menu</li>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<div className={styles.item}>
				<div className={styles.cart}>
					<img src={cartImg} alt='cart' width='32' height='32' />
				</div>
				<div className={styles.counter}>2</div>
			</div>
		</div>
	);
};

export default Navbar;
