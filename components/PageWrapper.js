
import Header from '../components/Navigations/Header'
import Drawer from '../components/Navigations/Drawer'

import { useState ,useEffect} from "react";
import Cart from './Cart/Cart';
import { useStore } from '../lib/drawer/context/StoreContext';
import useCart from '../lib/drawer/customhooks/useCart';
import Footer from './Navigations/Footer';


const PageWrapper =({children,hideNavigation,customClasses,padding,style})=>{
    const [drawer,setDrawer] = useState(true)
    const {cartOpen,openCart,closeCart} = useCart()
    return(
        <div
            style={{
                padding:padding,
                ...style
            }} 
            className={`wrapper ${customClasses && customClasses}`}>
            {
                !hideNavigation
                &&
                <>
                    <Header state={{
                drawerState:[drawer,setDrawer],
                cartState:[cartOpen,openCart,closeCart]
            }}/>
            <Drawer state={{
                drawerState:[drawer,setDrawer],
            }}/>
            <Cart
                open={cartOpen}
                action={closeCart}
            />
            
                </>
            }
            <div className='mini_wrapper'>{children}</div>
            <Footer/>

        </div>
    )
}

export default PageWrapper;