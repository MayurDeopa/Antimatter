import Link from 'next/link'
import CartProducts from '../components/Cart/CartProducts'
import QuantityPanel from '../components/Cart/QuantityPanel'
import styles from '../styles/cart.module.css'
import PageWrapper from '../components/PageWrapper'
import Head from 'next/head'
import PrimaryLoader from '../components/Loaders/PrimaryLoader'
import { useContext, useEffect, useState } from 'react'
import { Store } from '../lib/drawer/context/StoreContext'
import { useRouter } from 'next/router'
import { getCart } from '../services/api/cart'
import { userDetails } from '../lib/drawer/userDetails'
import Message from '../components/basic/Message'
import useCart from '../lib/drawer/customhooks/useCart'
import AwaitButton from '../components/Loaders/AwaitButton'
import {BiCartAlt,BiSad} from 'react-icons/bi'
import EmptyState from '../components/Misc/EmptyState'
import {HiOutlineEmojiSad} from 'react-icons/hi'
import ModalSpinner from '../components/Loaders/ModalSpinner'
import ModalDrawer from '../components/Misc/ModalDrawer'
import Form from '../components/Misc/Form'
import Skeleton from '../components/Loaders/Skeleton'
import LinkBtn from '../components/Misc/LinkBtn'

const Cart =()=>{
    const sample = [1]
    const router = useRouter()
    const {userState,cartState} = useContext(Store)
    const [user,setUser] = userState
    const [cart,setCart] = cartState
    const {checkout,isSpinning} = useCart()
    useEffect(()=>{
        const fetchCart = async()=>{
            const res= await getCart(user.id)
            setCart(res)
        }
        if(user)fetchCart()
    },[])
    
    if(!user){
        return (
            <div className='page'>
                <Head >
                    <title>{'Cart'}</title>
                </Head>
                <PageWrapper>
                    <EmptyState>
                        <Form card={{
                            title:"Authentication failed",
                            animated:false
                        }}>
                            <h3>You need to login to use cart</h3>
                            <LinkBtn link={{
                                text:"Login",
                                url:"/user"
                            }}/>
                        </Form>
                    </EmptyState>
                </PageWrapper>
            </div>
            )
    }
    
    else if(!cart){
        return (
        <div className='page'>
            <Head >
                <title>{'Loading...'}</title>
            </Head>
            <PageWrapper>
            
                <div className={styles.cart_container}>
                <div className={styles.cart_section}>
                    <div className={styles.cart_section_logs}>
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    {sample.map((s,i)=>{
                        return (
                            <CartProducts
                            states={{
                                loading:true
                            }}
                            key={i}
                         />
                        )
                    })}
                </div>
                <div className={styles.checkout_card}>
                    <div className={styles.cart_section_log_header}>
                        <h2>Order Summary</h2>
                    </div>
                    <Skeleton
                        attributes={{
                            height:'2.7rem',
                            width:'min(30rem,100%)'
                        }}
                    />
                </div>
            </div>
            :        
            </PageWrapper>
        </div>
        )
    }
    else{
        return (
            <div className='page'>
            <Head >
                <title>{'Cart'}</title>
            </Head>
            <PageWrapper>
            {
                cart.cart
                ?
                <div className={styles.cart_container}>
                <div className={styles.cart_section}>
                    <div className={styles.cart_section_logs}>
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    {
                        
                        cart.cart.map((p,i)=>{
                            return <CartProducts product={p} key={i}/>
                        })
                        
                    }
                </div>
                <div className={styles.checkout_card}>
                    <div className={styles.cart_section_log_header}>
                        <h2>Order Summary</h2>
                    </div>
                    
                    <AwaitButton states={{
                        awaitState :isSpinning?"loading":'none',
                        text:"Checkout",
                        action:()=>checkout({
                            amount:200000,
                            currency:"INR"
                        })
                    }}
                    />
                </div>
            </div>
            :
            <>
                <Message states={{
                    message:"Cart is empty",
                    type:"info"
                }}/>
                <Link href={'/shop'}>
                    <h3 className='checkout_button'>
                            Start Shopping 
                            <BiCartAlt/>
                    </h3>
                </Link>
            </>
            }
            </PageWrapper>
        </div>
        )
    }
}

export default Cart;