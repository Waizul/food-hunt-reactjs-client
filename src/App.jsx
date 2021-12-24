import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';

import AllItems from './pages/AllItems/AllItems';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Item from './pages/Item/Item';
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';
function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/items' element={<AllItems />} />
					<Route path='/item/:id' element={<Item />} />
					<Route path='/blogs' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='cart' element={<Cart />} />
					<Route path='/order' element={<Order />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</AuthProvider>
	);
}
export default App;
