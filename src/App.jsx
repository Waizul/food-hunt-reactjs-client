import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';

import AllItems from './pages/AllItems/AllItems';
import Breakfast from './pages/AllItems/Breakfast/Breakfast';
import Dinner from './pages/AllItems/Dinner/Dinner';
import Lunch from './pages/AllItems/Lunch/Lunch';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Item from './pages/Item/Item';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute';
import Order from './pages/Order/Order';
function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/home/' element={<Home />} />

					<Route path='/breakfast' element={<Breakfast />} />
					<Route path='/lunch' element={<Lunch />} />
					<Route path='/dinner' element={<Dinner />} />
					<Route path='/items' element={<AllItems />} />
					<Route path='/item/:id' element={<Item />} />
					<Route path='/blogs' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='cart'
						element={
							<PrivateRoute>
								<Cart />
							</PrivateRoute>
						}
					/>
					<Route
						path='/order'
						element={
							<PrivateRoute>
								<Order />
							</PrivateRoute>
						}
					/>
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</AuthProvider>
	);
}
export default App;
