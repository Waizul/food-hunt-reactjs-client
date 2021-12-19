import React from 'react';
import useFoodItem from '../../hooks/useFoodItem';
import styles from './Breakfast.module.css';

const Breakfast = () => {
	const foodItems = useFoodItem();

	console.log(foodItems);
	return (
		<>
			<div className={styles.container}>
				{foodItems.slice(6, 12).map((item) => (
					<div className={styles.wrapper} key={item.id}>
						<div className={styles.imgContainer}>
							<img src={item.img} alt='' className={styles.pic} />
						</div>
						<h2 className={styles.title}>{item.name}</h2>
						<p className={styles.desc}>{item.description}</p>
						<h5 className={styles.price}>
							<span>${item.price}</span>
						</h5>
						<button className={styles.orderButton}>
							Order Now
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default Breakfast;
{
	/* <NavLink className={({ isActive }) => (isActive ? 'red' : 'blue')} />; */
}
