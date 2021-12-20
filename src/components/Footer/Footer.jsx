import styles from './Footer.module.css';
import footerImg from '../../image/sign/bake.png';
const Footer = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.motto}>TASTE UNIQUE, LIVE UNIQUE</h2>
			<div className={styles.wrapper}>
				<div className={styles.item}>
					{/* <img src={footerImg} alt='' /> */}
					<iframe
						title='locations'
						width='550'
						height='435'
						id='gmap_canvas'
						src='https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed'
						frameborder='0'
						scrolling='no'
						marginheight='0'
						marginwidth='0'
					>
						Locations
					</iframe>
				</div>
				<div className={styles.item}>
					<div className={styles.card}>
						<h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
						<p className={styles.text}>
							Central road,
							<br />
							Shaheb Bazar,
							<br /> Rajshahi.
						</p>
						<p className={styles.text}>
							VIP road,
							<br />
							Baridhara,
							<br /> Dhaka.
						</p>
						<p className={styles.text}>
							Road 2,
							<br /> Gulshan,
							<br /> Dhaka.
						</p>
						<p className={styles.text}>
							Farmgate bus stand,
							<br /> Tejgaon,
							<br />
							Dhaka.
						</p>
					</div>
					<div className={styles.card}>
						<h1 className={styles.title}>WORKING HOURS</h1>
						<p className={styles.text}>
							SUNDAY - THURSDAY
							<br /> 9:00am – 11:00pm
						</p>
						<p className={styles.text}>
							FRIDAY - SATURDAY
							<br /> 2:00pm – 11:00pm
						</p>
					</div>
				</div>
			</div>
			<p className={styles.textRight}>
				Copyright reserved@FoodHunt-2022.
			</p>
		</div>
	);
};

export default Footer;
