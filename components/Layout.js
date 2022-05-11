import Drawer from "./Navigations/Drawer";
import Footer from "./Navigations/Footer";
import Header from "./Navigations/Header";
import {useStore} from '../lib/drawer/context/StoreContext'


const Layout =({children})=>{
    const [drawer,setDrawer] = useS
    return (
        <div className="layout">
            <Header state={{
                drawerState:[drawer,setDrawer]
            }}/>
            <Drawer state={{
                drawerState:[drawer,setDrawer]
            }}/>
            {children}
        </div>
    )
}

export default Layout;