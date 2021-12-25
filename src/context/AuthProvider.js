import React from 'react';
import { createContext } from 'react';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';

export const authContext = createContext('');

const AuthProvider = ({ children }) => {
	const auth = useFirebase();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
