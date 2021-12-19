import { useEffect, useState } from 'react';

const useFoodItem = () => {
	const [foodItems, setFoodItems] = useState([]);

	useEffect(() => {
		fetch('/fooditems.json')
			.then((res) => res.json())
			.then((data) => setFoodItems(data));
	}, []);
	console.log(foodItems);
	return foodItems;
};

export default useFoodItem;
