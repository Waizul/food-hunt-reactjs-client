import React from 'react';
import styles from './Home.module.css';
import Featured from './Featured/Featured';
import FoodMenu from './FoodMenu/FoodMenu';
import Services from './Services/Services';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Featured />
			<FoodMenu />
			<Services />
			<Footer />
		</div>
	);
};

export default Home;
