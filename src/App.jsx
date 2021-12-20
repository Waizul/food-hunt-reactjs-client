import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllItems from './pages/AllItems/AllItems';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/items' element={<AllItems />} />
				<Route path='/blogs' element={<Home />} />
				<Route path='login' element={<Login />} />
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}
export default App;
