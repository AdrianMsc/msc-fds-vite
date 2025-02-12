import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const ApiContext = createContext<{ data: any | null }>({ data: null });

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://msc-component-status-ws-1.onrender.com/handshake"
        );
        const result = await response.json();
        setData(result);
        queryClient.setQueryData(["handshakeData"], result); // Guarda en react-query
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [queryClient]);

  return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

export const useApiData = () => useContext(ApiContext);
