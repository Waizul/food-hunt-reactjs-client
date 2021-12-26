import React, { useState } from 'react';

import styles from './Featured.module.css';
import arrowl from '../../../image/sign/arrowl.png';
import arrowr from '../../../image/sign/arrowr.png';

const Featured = () => {
	const [index, setIndex] = useState(0);

	const images = [
		'https://i.ibb.co/KKQxc0v/dinner1.png',
		'https://i.ibb.co/fYZsjws/dinner4.png',
		'https://i.ibb.co/6mDtKfv/lunch6.png',
	];

	const handleArrow = (direction) => {
		if (direction === 'l') {
			setIndex(index !== 0 ? index - 1 : 2);
		}
		if (direction === 'r') {
			setIndex(index !== 2 ? index + 1 : 0);
		}
	};

	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow('l')}
			>
				<img src={arrowl} alt='arrow left' />
			</div>
			<div
				className={styles.wrapper}
				style={{ transform: `translateX(${-100 * index}vw)` }}
			>
				{images.map((img, i) => (
					<div className={styles.imgContainer} key={i}>
						<img src={img} alt='food item' />
					</div>
				))}
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow('r')}
			>
				<img src={arrowr} alt='arrow left' />
			</div>
		</div>
	);
};

export default Featured;
