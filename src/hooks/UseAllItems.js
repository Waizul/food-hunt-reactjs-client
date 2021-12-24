import { useEffect, useState } from 'react';

const UseAllItems = () => {
	const [allItems, setAllItems] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/items')
			.then((res) => res.json())
			.then((data) => setAllItems(data));
	}, []);

	return allItems;
};

export default UseAllItems;
