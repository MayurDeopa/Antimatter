
import Header from '../components/Navigations/Header'
import Drawer from '../components/Navigations/Drawer'

import { useState ,useEffect} from "react";
import Cart from './Cart/Cart';


const PageWrapper =({children,hideNavigation,customClasses,padding})=>{
    const [drawer,setDrawer] = useState(true)
    const [cartOpen,setCartOpen] = useState(false)
    return(
        <div
            style={{
                padding:padding
            }} 
            className={`wrapper ${customClasses && customClasses}`}>
            {
                !hideNavigation
                &&
                <>
                    <Header state={{
                drawerState:[drawer,setDrawer],
                cartState:[cartOpen,setCartOpen]
            }}/>
            <Drawer state={{
                drawerState:[drawer,setDrawer],
            }}/>
            <Cart
                open={cartOpen}
                action={()=>setCartOpen(false)}
            />
            
                </>
            }
            <div className='mini_wrapper'>{children}</div>
        </div>
    )
}

export default PageWrapper;