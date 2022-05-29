import Link from 'next/link'
import CartProducts from '../components/Cart/CartProducts'
import styles from '../styles/cart.module.css'
import PageWrapper from '../components/PageWrapper'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { Store } from '../lib/drawer/context/StoreContext'
import { useRouter } from 'next/router'
import { getCart } from '../services/api/cart'
import Message from '../components/basic/Message'
import useCart from '../lib/drawer/customhooks/useCart'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import {BiCartAlt} from 'react-icons/bi'
import EmptyState from '../components/Misc/EmptyState'
import Form from '../components/Misc/Form'
import Skeleton from '../components/Loaders/Skeleton'
import LinkBtn from '../components/Misc/LinkBtn'
import ButtonGroup from '../components/Misc/ButtonGroup'
import ErrorPopUp from '../components/Misc/ErrorPopUp'

const Cart =()=>{
    const sample = [1]
    const router = useRouter()
    const {userState,cartState} = useContext(Store)
    const [user,setUser] = userState
    const [cart,setCart] = cartState
    const [err,setErr] = useState()
    const {checkout,isSpinning} = useCart()
    useEffect(()=>{
        
            const fetchCart = async()=>{
                setErr()
                const res= await getCart(user._id)
                setCart(res)
            }
            if(user)fetchCart()
        
    },[user])
    
    if(!user){
        return (
            <>
                <Head >
                    <title>{'Cart'}</title>
                </Head>
                <PageWrapper>
                    <EmptyState>
                        <Form 
                            title={"No user found"}
                            animated={false}
                        >
                            <h3>You need to login to use cart</h3>
                            <LinkBtn 
                                text={"Login"}
                                url={"/user"}
                            />
                        </Form>
                    </EmptyState>
                </PageWrapper>
            </>
            )
    }
    
    else if(!cart){
        return (
        <>
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
                    <ButtonGroup
                        justify={'space-between'}
                    >
                        <Skeleton
                            height={'1rem'}
                            width={'20%'}
                        />
                        <Skeleton
                            height={'1rem'}
                            width={'20%'}
                        />
                    </ButtonGroup>
                    <ButtonGroup
                        justify={'space-between'}
                    >
                        <Skeleton
                            height={'1rem'}
                            width={'20%'}
                        />
                        <Skeleton
                            height={'1rem'}
                            width={'20%'}
                        />
                    </ButtonGroup>
                    <Skeleton
                        height={'2.5rem'}
                        width={'min(30rem,100%)'}
                    />
                </div>
            </div>    
            </PageWrapper>
        </>
        )
    }
    else{
        return (
            <>
            <Head >
                <title>{'Cart'}</title>
            </Head>
            <PageWrapper>
            {
                cart.cart
                ?
                cart.cart.length
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
                    <ButtonGroup
                        justify={'space-between'}
                    >
                        <p>Price</p>
                        <p>15</p>
                    </ButtonGroup>
                    <ButtonGroup
                        justify={'space-between'}
                    >
                        <p>Delivery</p>
                        <p>Free</p>
                    </ButtonGroup>
                    <ButtonGroup>
                        <PrimaryButton 
                            awaitState ={isSpinning?"loading":'none'}
                            text={"Checkout"}
                        />
                    </ButtonGroup>
                </div>
            </div>
            :
            <>
                <Message states={{
                    message:"Cart is empty",
                    type:"info"
                }}/>
                <LinkBtn 
                    text={'Start Shopping'}
                    url={'/shop'}
                />
            </>
            :
            <ErrorPopUp>
                <h4>Something went wrong</h4>
                <PrimaryButton
                    text={"Retry"}
                    awaitState={"none"}
                    action={()=>router.reload()}
                />
            </ErrorPopUp>
            }
            </PageWrapper>
        </>
        )
    }
}

export default Cart;