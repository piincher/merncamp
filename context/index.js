import { useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [ state, setState ] = useState({
		user: {},
		token: ''
	});

	useEffect(() => {
		setState(JSON.parse(window.localStorage.getItem('auth')));
	}, []);
	const router = useRouter();
	axios.interceptors.response.use(
		function(response) {
			return response;
		},
		function(error) {
			let res = error.response;
			if (res.status === 401 && res.config && !res.config.__isRetrRequest) {
				setState(null);
				window.localStorage.removeItem('auth');
				router.push('/login');
			}
		}
	);

	return <UserContext.Provider value={[ state, setState ]}>{children}</UserContext.Provider>;
};
export { UserProvider, UserContext };
