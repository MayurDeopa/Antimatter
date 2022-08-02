import { getCart } from "../../../services/api/cart"
import { useStore } from "../context/StoreContext"

const useGlobalStore =()=>{
    const {userState,cartState,drawerState} = useStore()
    const [user,setUser] = userState
    const [cart,setCart] = cartState
    const [drawer,setDrawer] = drawerState

    const changeUserDetails =(type,payload)=>{
        setUser({...user,details:{...user.details,[type]:payload}})
    }

    const updateCart = async()=>{
        const res = await getCart(user._id)
        if(res.status==='ok') setCart(res.cart)
    }


}

export default useGlobalStore;