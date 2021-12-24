import styles from './Dinner.module.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useFoodItem from '../../../hooks/useFoodItem';

const Dinner = () => {
	const type = 'dinner';
	const items = useFoodItem(type);
	return (
		<>
			<h2>Dinner</h2>
			<div className={styles.container}>
				{items.map((item) => (
					<FoodCard item={item} key={item.id} />
				))}
			</div>
		</>
	);
};

export default Dinner;
