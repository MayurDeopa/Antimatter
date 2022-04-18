import { useState } from "react"
import { useEffect } from "react"
import { addToCart, mutateQty } from "../../../services/api/cart"
import { makePayment } from "../../../services/api/payment"


const useCart =()=>{
    const [data,setData] = useState()
    const [isSpinning,setIsSpinning] = useState(false)
    const fetchCart = async(payload)=>{
        setIsSpinning(true)
        const res = await addToCart(payload)
        setIsSpinning(false)
    }
    const checkout = async(payload)=>{
        setIsSpinning(true)
        const res = await makePayment(payload)
        setData(res)
        setIsSpinning(false)
    }
    const modifyQty = async(payload)=>{
        setIsSpinning(true)
        const res = await mutateQty(payload)
        console.log(res)
        setIsSpinning(false)
    }
    return {isSpinning,fetchCart,checkout,data,modifyQty};
}

export default useCart;