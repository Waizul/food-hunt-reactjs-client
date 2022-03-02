import { useEffect, useState } from 'react';

const useFoodItem = (type) => {
	const [foodItems, setFoodItems] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/items?type=${type}`;

		fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setFoodItems(data));
	}, [type]);

	return foodItems;
};

export default useFoodItem;
