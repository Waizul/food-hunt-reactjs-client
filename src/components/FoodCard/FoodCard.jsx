import styles from './FoodCard.module.css';

const FoodCard = ({ item }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.imgContainer}>
						<img src={item.img} alt='' className={styles.pic} />
					</div>
					<h2 className={styles.title}>{item.name}</h2>
					<p className={styles.desc}>{item.description}</p>
					<h5 className={styles.price}>
						<span>${item.price}</span>
					</h5>
					<button className={styles.orderButton}>Order Now</button>
				</div>
			</div>
		</>
	);
};

export default FoodCard;
{
	/* <NavLink className={({ isActive }) => (isActive ? 'red' : 'blue')} />; */
}
