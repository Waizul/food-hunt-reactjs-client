import { Link } from 'react-router-dom';
import styles from './FoodCard.module.css';

const FoodCard = ({ item }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.imgContainer}>
						<img src={item.imgUrl} alt='' className={styles.pic} />
					</div>
					<h2 className={styles.title}>{item.title}</h2>
					<p className={styles.desc}>{item.desc}</p>
					<h5 className={styles.price}>
						<span>${item.price}</span>
					</h5>
					<Link
						to={`/item/${item._id}
					`}
					>
						<button className={styles.orderButton}>
							Order Now
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default FoodCard;
{
	/* <NavLink className={({ isActive }) => (isActive ? 'red' : 'blue')} />; */
}
