import React from 'react';
import styles from './Navbar.module.css';
import telImg from '../../image/sign/telephone.png';
import cartImg from '../../image/sign/cart.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const activeStyle = {
		color: 'red',
	};
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
					<NavLink
						to='/home'
						className={styles.navlink}
						activeStyle={activeStyle}
					>
						<li className={styles.listItem}>Home</li>
					</NavLink>
					<NavLink to='/items' className={styles.navlink}>
						<li className={styles.listItem}>All Items</li>
					</NavLink>
					<NavLink to='blog' className={styles.navlink}>
						<li className={styles.listItem}>Blog</li>
					</NavLink>
				</ul>
			</div>
			<div className={styles.item}>
				<Link to='/login'>
					{' '}
					<button className={styles.loginButton}>Login</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

// <div className={styles.cart}>
// 					<img src={cartImg} alt='cart' width='32' height='32' />
// 				</div>
// 				<div className={styles.counter}>2</div>
