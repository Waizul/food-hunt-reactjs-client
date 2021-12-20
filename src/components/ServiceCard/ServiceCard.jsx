import React from 'react';
import styles from './ServiceCard.module.css';
const ServiceCard = ({ service }) => {
	const { title, desc, img } = service;
	console.log(service);
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.imgContainer}>
					<img src={img} alt='' className={styles.servcImg} />
				</div>
				<h5 className={styles.title}>{title}</h5>
				<p className={styles.desc}>{desc}</p>{' '}
			</div>
		</>
	);
};

export default ServiceCard;
