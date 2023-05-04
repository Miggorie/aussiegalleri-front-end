import { createContext, useState, useCallback } from "react";
import { Dog } from "../interfaces/Interfaces";

export interface DogsContextType {
  dogs: Dog[];
  fetchData: () => Promise<void>;
}

//Create the Context

const DogsContext = createContext<DogsContextType>({
  dogs: [],
  fetchData: () => Promise.resolve(),
});

interface Props {
  children: React.ReactNode;
}

//Create the Provider, which is the fetch from api.php

const Provider = ({ children }: Props) => {
  const [dogs, setDogs] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "http://aussiegalleri.se/api/search/alldogs.php"
      );
      const data = await response.json();
      setDogs(data.dogs);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DogsContext.Provider value={{ dogs, fetchData }}>
      {children}
    </DogsContext.Provider>
  );
};

//exporting them

export { Provider };
export default DogsContext;
