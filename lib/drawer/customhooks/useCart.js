import { useState } from "react"
import { useEffect } from "react"
import { addToCart, mutateQty } from "../../../services/api/cart"
import { makePayment } from "../../../services/api/payment"
import { getProductById } from "../../../services/api/products"
import { useStore } from "../context/StoreContext"


const useCart =()=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [cartMessage,setCartMessage] = useState()
    const [variants,setVariants] = useState([])
    const [isSpinning,setIsSpinning] = useState(false)
    const fetchCart = async(payload)=>{
        setIsSpinning(true)
        setCartMessage()
        const res = await addToCart(payload)
        setCartMessage({
            type:res.status,
            message:res.message
        })
        setIsSpinning(false)
    }
    const checkout = async(payload)=>{
        setIsSpinning(true)
        await makePayment(payload)

        setIsSpinning(false)
    }
    const modifyQty = async(payload)=>{
        setIsSpinning(true)
        const res = await mutateQty({
            id:user._id,
            query:payload.query,
            product:payload.product
        })
        setIsSpinning(false)
    }

    const getProductData = async(payload)=>{
        setIsSpinning(true)
        const res = await getProductById(payload)
        if(res.status==='ok'){
            setData(res.data)
            setVariants(res.data.variant_groups)
        }
        else setErr(res.message)
        setIsSpinning(false)
    }
    return {isSpinning,fetchCart,checkout,data,modifyQty,getProductData,err,cartMessage,variants};
}

export default useCart;