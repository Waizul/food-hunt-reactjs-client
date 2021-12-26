import React from 'react';
import styles from './Navbar.module.css';
import telImg from '../../image/sign/telephone.png';
import cartImg from '../../image/sign/cart.png';
import { Link, NavLink } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
	const { cart } = useCart();
	console.log(cart);
	const { user, logOut } = useAuth();
	console.log(user);

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<img src={telImg} alt='telephone' width='28' height='28' />
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>ORDER NOW</div>
					<div className={styles.text}>01000000000</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<NavLink to='/home' className={styles.navlink}>
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
				<Link to='/cart'>
					<div className={styles.cart}>
						<img src={cartImg} alt='' width='30px' height='30px' />
						<div className={styles.counter}>{cart.length}</div>
					</div>
				</Link>
			</div>
			{user.email ? (
				<>
					<span>{user.displayName}</span>
					<button onClick={logOut} className={styles.loginButton}>
						Logout
					</button>
				</>
			) : (
				<Link to='/login'>
					{' '}
					<button className={styles.loginButton}>Login</button>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
