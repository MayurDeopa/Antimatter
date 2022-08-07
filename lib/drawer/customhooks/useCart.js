import { useState } from "react"
import { useEffect } from "react"
import { addToCart, handleAddToCart, initiateCart, mutateQty } from "../../../services/api/cart"
import { makePayment } from "../../../services/api/payment"
import { getProductById } from "../../../services/api/products"
import { commerce } from "../commerce"
import { useStore } from "../context/StoreContext"


const useCart =()=>{
    const {userState,progressState,cartState} = useStore()
    const [user,setUser] = userState
    const [progress,setProgress] = progressState
    const [cart,setCart] = cartState
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [cartMessage,setCartMessage] = useState()
    const [variants,setVariants] = useState([])
    const [isSpinning,setIsSpinning] = useState(false)
    let [options ,setOptions]= useState({})
    const fetchCart = async(id,quantity,options)=>{

        setProgress(true)
        setIsSpinning(true)
        setCartMessage()
        await handleAddToCart(id,quantity,options)
        setIsSpinning(false)
        setProgress(false)
    }
    const checkout = async(payload)=>{
        setIsSpinning(true)
        await makePayment(payload)

        setIsSpinning(false)
    }
    {/*const modifyQty = async(payload)=>{
        setProgress(true)
        setIsSpinning(true)
        const res = await mutateQty({
            id:user._id,
            query:payload.query,
            product:payload.product
        })
        setIsSpinning(false)
        setProgress(false)
    }*/}
    const getProductData = async(payload)=>{
        let some ={}
        setIsSpinning(true)
        const res = await getProductById(payload)
        if(res.status==='ok'){
            setData(res.data)
            setVariants(res.data.variant_groups)
            res.data.variant_groups.map((v)=>{
                some[v.id] = v.options[0].id
            })
            setOptions(some)
        }
        else setErr(res.message)
        setIsSpinning(false)
    }

    const getCart = async()=>{
        setProgress(true)
        setCartMessage()
        const res = await initiateCart()
        console.log(res)
        setProgress(false)
    }

    const modifyQty=async(id,qty)=>{
        setProgress(true)
        const res = await commerce.cart.update(id,{quantity:qty})
        setCart(res.cart)
        setProgress(false)
    }

    const emptyCart = async()=>{
        setProgress(true)
        const res = await commerce.cart.empty()
        setCart(res.cart)
        setProgress(false)
    }

    const handleOptions =(key,value)=>{
        setOptions({...options,[key]:value})
    }
    return {isSpinning,fetchCart,checkout,data,modifyQty,getProductData,err,cartMessage,variants,getCart,emptyCart,setVariants,options,handleOptions};
}

export default useCart;