import { createContext, useState } from "react";
import { useContext } from "react";

export const Store = createContext()

const StoreContext =({children,states})=>{
    
    return (
        <Store.Provider value={states}>
            {children}
        </Store.Provider>
    )

}

export const useStore =()=>{
    return useContext(Store) 
}

export default StoreContext;