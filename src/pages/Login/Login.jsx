import React, { useState } from 'react';
import styles from './Login.module.css';

const initialState = {
	fullName: '',
	username: '',
	password: '',
	confirmPassword: '',
	phoneNumber: '',
};

const Login = () => {
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
	};
	return (
		<div className={styles.container}>
			{' '}
			<div className={styles.wrapper}>
				<div className={styles.formContent}>
					<p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
					<form onSubmit={handleSubmit}>
						{isSignup && (
							<div className={styles.formInput}>
								<label htmlFor='fullName'>Full Name</label>
								<input
									name='fullName'
									type='text'
									placeholder='Full Name'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className={styles.formInput}>
							<label htmlFor='username'>Username</label>
							<input
								name='username'
								type='text'
								placeholder='Username'
								onChange={handleChange}
								required
							/>
						</div>
						{isSignup && (
							<div className={styles.formInput}>
								<label htmlFor='phoneNumber'>
									Phone Number
								</label>
								<input
									name='phoneNumber'
									type='text'
									placeholder='Phone Number'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						{isSignup && (
							<div className={styles.formInput}>
								<label htmlFor='avatarURL'>Avatar URL</label>
								<input
									name='avatarURL'
									type='text'
									placeholder='Avatar URL'
									onChange={handleChange}
								/>
							</div>
						)}
						<div className={styles.formInput}>
							<label htmlFor='password'>Password</label>
							<input
								name='password'
								type='password'
								placeholder='Password'
								onChange={handleChange}
								required
							/>
						</div>
						{isSignup && (
							<div className={styles.formInput}>
								<label htmlFor='confirmPassword'>
									Confirm Password
								</label>
								<input
									name='confirmPassword'
									type='password'
									placeholder='Confirm Password'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className={styles.formButton}>
							<button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
						</div>
					</form>
					<div className={styles.formStatus}>
						<p>
							{isSignup
								? 'Already have an account? '
								: "Don't have an account? "}
							<span onClick={switchMode}>
								{isSignup ? 'Sign In' : 'Sign Up'}
							</span>
						</p>
					</div>
				</div>
			</div>
			{/* <div className='image-container'>
			<img src={signinImage} alt='sign in' />
			</div> */}
		</div>
	);
};

export default Login;