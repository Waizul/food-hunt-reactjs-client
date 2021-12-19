import React from 'react';
import styles from './Home.module.css';
import Featured from './Featured/Featured';
import FoodMenu from './FoodMenu/FoodMenu';

const Home = () => {
	return (
		<div>
			<Featured />
			<FoodMenu />
		</div>
	);
};

export default Home;
