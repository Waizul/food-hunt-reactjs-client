import React, { useEffect, useState } from 'react';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import styles from './Services.module.css';
const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('./services.json')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>Why choose us</h2>
			<p className={styles.desc}>
				We provide the best services in our capital. On time delivery
				makes service very pleasant. We have expert chefs on different
				food items.
			</p>
			<div className={styles.wrapper}>
				{services.map((service) => (
					<ServiceCard service={service} key={service.id} />
				))}
			</div>
		</div>
	);
};

export default Services;
