import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setComponentsState } from "../redux/slices/componentsSlice";
import { getComponentsApi } from "../api/getComponents";
import { ICategoryApi } from "../interfaces/component.interface";

const ApiContext = createContext<{ data: ICategoryApi[] | null }>({ data: null });

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ICategoryApi[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getComponentsApi()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setComponentsState(data));
    }
  }, [data, dispatch]);

  return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApiData = () => useContext(ApiContext);
