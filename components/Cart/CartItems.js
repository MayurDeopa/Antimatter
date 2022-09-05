
import CartProducts from '../Cart/CartProducts'

import { useContext, useEffect, useState } from 'react'
import { Store } from '../../lib/drawer/context/StoreContext'

import useCart from '../../lib/drawer/customhooks/useCart'
import { commerce } from '../../lib/drawer/commerce'


const CartItems =()=>{
    const sample = [1]
    const {cartState} = useContext(Store)
    const [cart,setCart] = cartState
    const [err,setErr] = useState()
    const [loading,setLoading] = useState(true)
    const {checkout,isSpinning,emptyCart} = useCart()
    useEffect(()=>{
        
            const fetchCart = async()=>{
                setErr()
                const res= await commerce.cart.retrieve()
                setCart(res)
                setLoading(false)
                console.log(res)
            }
            fetchCart()
        
    },[])
    if(loading){
        {sample.map((i,index)=>{
            return <CartProducts  loading={loading}/>
        })}
    }
    return(
        <>
           {sample.map((i,index)=>{
            return <CartProducts  loading={true}/>
        })} 
        </>
    )
}

export default CartItems;