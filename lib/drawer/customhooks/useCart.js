import { useState } from "react"
import { useEffect } from "react"
import { addToCart, mutateQty } from "../../../services/api/cart"
import { makePayment } from "../../../services/api/payment"
import { getProductById } from "../../../services/api/products"


const useCart =()=>{
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [isSpinning,setIsSpinning] = useState(false)
    const fetchCart = async(payload)=>{
        setIsSpinning(true)
        const res = await addToCart(payload)
        setIsSpinning(false)
    }
    const checkout = async(payload)=>{
        setIsSpinning(true)
        await makePayment(payload)

        setIsSpinning(false)
    }
    const modifyQty = async(payload)=>{
        setIsSpinning(true)
        const res = await mutateQty(payload)
        setIsSpinning(false)
    }

    const getProductData = async(payload)=>{
        setIsSpinning(true)
        const res = await getProductById(payload)
        if(res.status==='ok') setData(res.data)
        else setErr(res.error)
        setIsSpinning(false)
    }
    return {isSpinning,fetchCart,checkout,data,modifyQty,getProductData,err};
}

export default useCart;