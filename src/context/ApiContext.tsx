import { createContext, useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getComponents } from "../redux/slices/componentsSlice";
import { ICategoryApi } from "../interfaces/component.interface";
import { baseUrl } from "../api";

const ApiContext = createContext<{ data: any | null }>({ data: null });

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { data, error } = useQuery<ICategoryApi[]>({
    queryKey: ["components"],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/components`);
      return await response.json();
    },
  });

  useEffect(() => {
    if (data) {
      queryClient.setQueryData(["components"], data); // Guarda en react-query
      dispatch(getComponents(data));
    } else if (error) {
      console.log(error);
    }
  }, [queryClient]);

  return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

export const useApiData = () => useContext(ApiContext);
