import styles from './Lunch.module.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useFoodItem from '../../../hooks/useFoodItem';

const Lunch = () => {
	const type = 'lunch';
	const items = useFoodItem(type);
	return (
		<>
			<h1>l</h1>
			<div className={styles.container}>
				{items.map((item) => (
					<FoodCard item={item} key={item._id} />
				))}
			</div>
		</>
	);
};

export default Lunch;
