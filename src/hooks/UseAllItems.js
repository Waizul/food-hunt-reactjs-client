import { useEffect, useState } from 'react';

const UseAllItems = () => {
	const [allItems, setAllItems] = useState([]);

	useEffect(() => {
		fetch('https://still-ocean-05548.herokuapp.com/items')
			.then((res) => res.json())
			.then((data) => setAllItems(data));
	}, []);

	return allItems;
};

export default UseAllItems;
