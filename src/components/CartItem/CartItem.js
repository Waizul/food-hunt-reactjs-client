import { useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
	
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<img src={item?.imgUrl} width={100} height={100} alt='' />
				<div className={styles.textWrapper}>
					<h5 className={styles.title}>{item.title}</h5>
					<p className={styles.price}>${item.price}</p>
					<p>Qtn: {item.quantity}</p>
					<p>Total: {(item.price*item.quantity).toFixed(2)}</p>
				</div>
				
					{item.extras.map(extra=>
						<div>
						<p>{extra.title}</p>
					<p className={styles.price}>${extra.price}</p>
					
					</div>
						)}
					
			
			</div>
		</div>
	);
};

export default CartItem;
