
import Header from '../components/Navigations/Header'
import Drawer from '../components/Navigations/Drawer'

import { useState ,useEffect} from "react";


const PageWrapper =({children,hideNavigation})=>{
    const [drawer,setDrawer] = useState(true)
    return(
        <div className="wrapper">
            {
                !hideNavigation
                &&
                <>
                    <Header state={{
                drawerState:[drawer,setDrawer]
            }}/>
            <Drawer state={{
                drawerState:[drawer,setDrawer]
            }}/>
                </>
            }
            {children}
        </div>
    )
}

export default PageWrapper;