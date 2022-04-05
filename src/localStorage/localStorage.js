// const addToLocalStorage = (_id, quantity) => {
// 	const exists = getStorage();
// 	let cart = {};
// 	if (!exists) {
// 		cart[_id] = quantity;
// 	} else {
// 		cart = JSON.parse(exists);
// 		if (cart[_id]) {
// 			// const newCount = quantity
// 			cart[_id] = quantity;
// 		} else {
// 			cart[_id] = 1;
// 		}
// 	}
// 	updateStorage(cart);
// };
// const getStorage = () => localStorage.getItem('cart');
// const updateStorage = (cart) => {
// 	localStorage.setItem('cart', JSON.stringify(cart));
// };
// const removeFromStorage = (id) => {
// 	const exists = getStorage();
// 	if (!exists) {
// 	} else {
// 		const cart = JSON.parse(exists);
// 		delete cart[id];
// 		updateStorage(cart);
// 	}
// };
// const getStoredCart = () => {
// 	const exists = getStorage();
// 	return exists ? JSON.parse(exists) : {};
// };
// const clearStorage = () => {
// 	localStorage.removeItem('cart');
// };
// export { addToLocalStorage, removeFromStorage, getStoredCart, clearStorage };
