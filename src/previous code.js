// const Item = () => {
// 	const [item, setItem] = useState({});
// 	const [quantity, setQuantity] = useState(1);
// 	const { id } = useParams();
// 	const { cart, setCart } = useCart();
// 	// console.log(cart);
// 	useEffect(() => {
// 		const url = `http://localhost:5000/items/${id}`;
// 		fetch(`${url}`)
// 			.then((res) => res.json())
// 			.then((data) => setItem(data));
// 	}, [id]);
// 	// console.log(item);
// 	let price = parseInt(item?.price);

// 	const [newPrice, setNewPrice] = useState(item?.price);

// 	const handleQuantity = (sign) => {
// 		if (sign === '-' && quantity > 1) {
// 			setQuantity(quantity - 1);
// 			price = price * quantity - price;
// 			setNewPrice(price);
// 		}
// 		if (sign === '+') {
// 			setQuantity(quantity + 1);
// 			price = price + price * quantity;
// 			setNewPrice(price);
// 		}
// 	};

// 	const handleAddToCart = (item) => {
// 		const exists = cart.find((itm) => itm._id === item._id);
// 		let newCart = [];
// 		if (exists) {
// 			const rest = cart.filter((itm) => itm._id !== item._id);
// 			exists.quantity = exists.quantity + 1;
// 			newCart = [...rest, item];
// 		} else {
// 			item.quantity = quantity;
// 			newCart = [...cart, item];
// 		}
// 		setCart(newCart);
// 		addToLocalStorage(item._id, quantity);
// 	};

// const CartItem = ({ item }) => {const CartItem = ({ item }) => {
// const [quantity, setQuantity] = useState(1);
	// const [reNewPrice, setReNewPrice] = useState(0);
	
	// let newPrice = item?.price;

	// const handleQuantity = (sign) => {
	// 	if (sign === '-' && quantity > 1) {
	// 		setQuantity(quantity - 1);
	// 		newPrice = newPrice * quantity - newPrice;
	// 		setReNewPrice(newPrice);
	// 	}
	// 	if (sign === '+') {
	// 		setQuantity(quantity + 1);
	// 		newPrice = newPrice + newPrice * quantity;
	// 		setReNewPrice(newPrice);
	// 	}
	// };

    // const CartTotal = ({ cart, children }) => {
    //     console.log(cart);
    //     let total = 0;
    //     let totalQuantity = 0;
    
    //     for (const item of cart) {
    //         if (!item.quantity) {
    //             item.quantity = 1;
    //         }
    //         total = total + item.price * item.quantity;
    //         totalQuantity = totalQuantity + item.quantity;
    //         console.log(item.price);
    //     }
    