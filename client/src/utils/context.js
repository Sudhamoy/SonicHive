import React from "react";
import { createContext,useState } from "react";

export const Context = createContext();

const Appcontext = ({children})=>{
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  return (
    <Context.Provider
    value={{
      categories,
      setCategories,
      products,
      setProducts,
    }}
    >
      {children}
    </Context.Provider>
  );  
}

export default Appcontext;