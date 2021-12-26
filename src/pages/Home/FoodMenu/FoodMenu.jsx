import React from 'react';
import { Link } from 'react-router-dom';
import Lunch from '../../AllItems/Lunch/Lunch';

import styles from './FoodMenu.module.css';

const FoodMenu = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST FOOD IN CAPITAL</h1>
			<p className={styles.desc}>
				We deliver the best, original, and delicious food. Our food
				taste is unique. Food will be delivered in a short period of
				time. If like to eat in our restaurant, we have great
				environment suited to your need.
			</p>

			<div className={styles.linkContainer}>
				<Link to={'breakfast'} className={styles.link}>
					Breakfast
				</Link>
				<Link to='lunch' className={styles.link}>
					Lunch
				</Link>
				<Link to='dinner' className={styles.link}>
					Dinner
				</Link>
			</div>
			<div className={styles.wrapper}>
				<Lunch />
			</div>
		</div>
	);
};

export default FoodMenu;
