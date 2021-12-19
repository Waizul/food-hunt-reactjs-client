import React, { useState } from 'react';

import styles from './Featured.module.css';
import arrowl from '../../../image/sign/arrowl.png';
import arrowr from '../../../image/sign/arrowr.png';
import brfImg from '../../../image/food/breakfast5.png';
import lnImg from '../../../image/food/lunch2.png';
import dnImg from '../../../image/food/dinner3.png';

const Featured = () => {
	const [index, setIndex] = useState(0);

	const images = [brfImg, lnImg, dnImg];

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
