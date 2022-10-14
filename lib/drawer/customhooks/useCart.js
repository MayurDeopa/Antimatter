import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import {  handleAddToCart, initiateCart } from "../../../services/api/cart"
import { getProductById } from "../../../services/api/products"
import { commerce } from "../commerce"
import { useStore } from "../context/StoreContext"
import { setScroll } from "../disableScroll"


const useCart =(productData)=>{
    const router = useRouter()
    const {progressState,cartState,cartLoader,cartDrawer} = useStore()
    const [visible,setVisible] = cartLoader
    const [cartOpen,setCartOpen] = cartDrawer
    const [progress,setProgress] = progressState
    const [cart,setCart] = cartState
    const [err,setErr] = useState()
    const [cartMessage,setCartMessage] = useState()
    const [variants,setVariants] = useState([])
    const [isSpinning,setIsSpinning] = useState(false)
    let [options ,setOptions]= useState({})
    const isEmpty =cart?.line_items.length==0

    useEffect(()=>{
        if(!productData){
            return;
        }
        let some ={}
        setVariants(productData.variant_groups)
        productData.variant_groups.map((v)=>{
            some[v.id] = v.options[0].id
        })
        setOptions(some)
    },[productData])

    const openCart =()=>{
        setScroll(true)
        setCartOpen(true)
    }

    const closeCart =()=>{
        setScroll(false)
        setCartOpen(false)
    }

    const initialRequest = async()=>{
        setVisible(true)
        const res= await commerce.cart.retrieve()
        setCart(res)
        setVisible(false)
    }

    const fetchCart = async(id,quantity,options)=>{
        setProgress(true)
        setCartMessage()
        try{
            const res = await handleAddToCart(id,quantity,options)
            setCart(res.cart)
        }catch(error){
            toast.error(error.message)
        }
        
        setProgress(false)
        setScroll(true)
        setCartOpen(true)
    }
    const checkout = async(id)=>{
        if(!id) return
        setScroll(false)
        setCartOpen(false)
        router.push(`/checkout?id=${id}`)
        
    }
    const getProductData = async(payload)=>{
        let some ={}
        setIsSpinning(true)
        const res = await getProductById(payload)
        setProductData(res)
        setVariants(res.variant_groups)
        res.variant_groups.map((v)=>{
            some[v.id] = v.options[0].id
        })
        setOptions(some)
        
    }

    const getCart = async()=>{
        setVisible(true)
        setCartMessage()
        const res = await initiateCart()
        setVisible(false)
    }

    const modifyQty=async(id,qty)=>{
        setVisible(true)
        const res = await commerce.cart.update(id,{quantity:qty})
        setCart(res.cart)
        setVisible(false)
    }

    const emptyCart = async()=>{
        setVisible(true)
        const res = await commerce.cart.empty()
        setCart(res.cart)
        setVisible(false)
    }

    const handleOptions =(key,value)=>{
        setOptions({...options,[key]:value})
    }

    const removeItem = async(id)=>{
        const res = await commerce.cart.remove(id)
        setCart(res.cart)
    }


    return {isSpinning,fetchCart,checkout,productData,modifyQty,getProductData,err,cartMessage,variants,getCart,emptyCart,setVariants,options,handleOptions,removeItem,isEmpty,cart,initialRequest,openCart,closeCart,cartOpen};
}

export default useCart;