import { useEffect, useState } from 'react';

const useFoodItem = (type) => {
	const [foodItems, setFoodItems] = useState([]);

	useEffect(() => {
		const url = `https://still-ocean-05548.herokuapp.com/items?type=${type}`;

		fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setFoodItems(data));
	}, [type]);

	return foodItems;
};

export default useFoodItem;
