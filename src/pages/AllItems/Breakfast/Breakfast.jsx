import styles from './Breakfast.module.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useFoodItem from '../../../hooks/useFoodItem';

const Breakfast = () => {
	const type = 'breakfast';
	const items = useFoodItem(type);

	return (
		<>
			<h2>Breakfast</h2>
			<div className={styles.container}>
				{items.map((item) => (
					<FoodCard item={item} key={item.id} />
				))}
			</div>
		</>
	);
};

export default Breakfast;
