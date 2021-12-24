import React from 'react';
import { createContext } from 'react';
import useCart from '../hooks/useCart';

export const authContext = createContext('');

const AuthProvider = ({ children }) => {
	const { cart } = useCart();
	return <authContext.Provider value={cart}>{children}</authContext.Provider>;
};

export default AuthProvider;
