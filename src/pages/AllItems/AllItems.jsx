import React from 'react';
import styles from './AllItems.module.css';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
const AllItems = () => {
	return (
		<div className={styles.container}>
			<Breakfast />
			<Lunch />
			<Dinner />
		</div>
	);
};

export default AllItems;
