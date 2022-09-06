
import styles from '../../styles/cart.module.css'

import CartProducts from '../Cart/CartProducts'

import { useContext, useEffect, useState } from 'react'
import { Store, useStore } from '../../lib/drawer/context/StoreContext'

import useCart from '../../lib/drawer/customhooks/useCart'
import { commerce } from '../../lib/drawer/commerce'
import PrimarySpinner from '../Loaders/PrimarySpinner'


const CartItems =()=>{
    const {cartState} = useStore()
    const [cart,setCart] = cartState

    if(!cart){
        return(
            <div className={styles.cart_items}>
                <CartProducts loading/>
            </div>
        )
    }

    if(!cart.line_items.length){
        return(
            <div className={styles.cart_items}>
                Your cart is empty
            </div>
        )
    }
    return(
        <div className={styles.cart_items}>
            {
                cart.line_items.map((c,index)=>{
                    return <CartProducts product={c} key={index}/>
                })
            }
        </div>
    )
    
}

export default CartItems;