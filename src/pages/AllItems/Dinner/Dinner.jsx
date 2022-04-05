import styles from './Dinner.module.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useFoodItem from '../../../hooks/useFoodItem';

const Dinner = () => {
	const type = 'dinner';
	const items = useFoodItem(type);
	return (
		<><h1></h1>
			<div className={styles.container}>
				{items.map((item) => (
					<FoodCard item={item} key={item._id} />
				))}
			</div>
		</>
	);
};

export default Dinner;
