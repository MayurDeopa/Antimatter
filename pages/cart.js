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
import SecondaryButton from '../components/Loaders/SecondaryButton'
import Form from '../components/Misc/Form'
import Skeleton from '../components/Loaders/Skeleton'
import LinkBtn from '../components/Misc/LinkBtn'
import MainContainer from '../components/Misc/MainContainer'
import ErrorPopUp from '../components/Misc/ErrorPopUp'
import { commerce } from '../lib/drawer/commerce'

const Cart =()=>{
    const sample = [1]
    const router = useRouter()
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
            }
            fetchCart()
        
    },[])
    
    {/*if(!user){
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
    }*/}
    
    if(loading){
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
                    <MainContainer
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
                    </MainContainer>
                    <MainContainer
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
                    </MainContainer>
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
                cart.line_items
                ?
                cart.line_items.length
                ?
                <div className={styles.cart_container}>
                <div className={styles.cart_section}>
                    <div className={styles.cart_section_logs}>
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    {
                        
                        cart.line_items.map((p,i)=>{
                            return <CartProducts product={p} key={i}/>
                        })
                        
                    }
                    <MainContainer
                        maxWidth={'100%'}
                        justify={'flex-end'}

                    >
                        <SecondaryButton
                            width={'8rem'}
                            text={"Empty cart"}
                            action={emptyCart}
                        />
                    </MainContainer>
                </div>
                <div className={styles.checkout_card}>
                    <div className={styles.cart_section_log_header}>
                        <h2 className={styles.order_summary_header}>Order Summary</h2>
                    </div>
                    <MainContainer
                        justify={'space-between'}
                    >
                        <p>Price</p>
                        <p>{cart.subtotal.formatted_with_symbol}</p>
                    </MainContainer>
                    <MainContainer
                        justify={'space-between'}
                    >
                        <p>Delivery</p>
                        <p>Free</p>
                    </MainContainer>
                    <MainContainer>
                        <PrimaryButton 
                            awaitState ={isSpinning?"loading":'none'}
                            text={"Checkout"}
                            action={()=>checkout(cart.hosted_checkout_url)}
                        />
                    </MainContainer>
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