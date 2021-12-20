import styles from './Dinner.module.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useFoodItem from '../../../hooks/useFoodItem';

const Dinner = () => {
	const items = useFoodItem();
	return (
		<>
			<h2>Dinner</h2>
			<div className={styles.container}>
				{items.slice(0, 6).map((item) => (
					<FoodCard item={item} key={item.id} />
				))}
			</div>
		</>
	);
};

export default Dinner;
