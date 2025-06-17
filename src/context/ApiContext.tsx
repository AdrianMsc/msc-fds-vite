import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setComponentsState } from '../redux/slices/componentsSlice';
import { getComponentListApi } from '../api/getComponentList';

const ApiContext = createContext<{ data: any | null }>({ data: null });

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
	const [data, setData] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		getComponentListApi()
			.then((result) => {
				setData(result);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	useEffect(() => {
		if (data) {
			dispatch(setComponentsState(data));
		}
	}, [data]);

	return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

export const useApiData = () => useContext(ApiContext);
