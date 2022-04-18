import { useEffect } from "react";
import { useStore } from "../lib/drawer/context/StoreContext";


const PageWrapper =({children})=>{
    return(
        <div className="wrapper">
            {children}
        </div>
    )
}

export default PageWrapper;