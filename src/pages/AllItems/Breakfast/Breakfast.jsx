import styles from './Breakfast.module.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useFoodItem from '../../../hooks/useFoodItem';

const Breakfast = () => {
	const items = useFoodItem();

	return (
		<>
			<h2>Breakfast</h2>
			<div className={styles.container}>
				{items.slice(6, 12).map((item) => (
					<FoodCard item={item} key={item.id} />
				))}
			</div>
		</>
	);
};

export default Breakfast;
