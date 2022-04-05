// import { useEffect, useState } from 'react';
// import { getStoredCart } from '../localStorage/localStorage';
// import UseAllItems from './UseAllItems';

// const useCart = () => {
// 	const [cart, setCart] = useState([]);
// 	const allItems = UseAllItems();

// 	console.log(cart);
// 	useEffect(() => {
// 		if (allItems.length) {
// 			const savedCart = getStoredCart();
// 			const storedCart = [];
// 			for (const _id in savedCart) {
// 				const addedItem = allItems.find((item) => item._id === _id);

// 				storedCart.push(addedItem);
// 			}
// 			setCart(storedCart);
// 		}
// 	}, [allItems]);
// 	return { cart, setCart };
// };

// export default useCart;
