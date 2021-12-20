import React from 'react';
import styles from './Home.module.css';
import Featured from './Featured/Featured';
import FoodMenu from './FoodMenu/FoodMenu';
import Services from './Services/Services';

const Home = () => {
	return (
		<div>
			<Featured />
			<FoodMenu />
			<Services />
		</div>
	);
};

export default Home;
