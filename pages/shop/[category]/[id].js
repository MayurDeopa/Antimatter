import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import PageWrapper from "../../../components/PageWrapper";
import styles from '../../../styles/Product.module.css'
import { useQuery } from "react-query";
import { getProductById } from "../../../services/api/products";
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from "react";
import { Store } from "../../../lib/drawer/context/StoreContext";
import Link from "next/link";
import AddToCart from "../../../components/Cart/AddToCart";
import AwaitButton from "../../../components/Loaders/AwaitButton";
import useCart from "../../../lib/drawer/customhooks/useCart";
import Skeleton from "../../../components/Loaders/Skeleton";
import FunctionalModalForm from "../../../components/Misc/FunctionalModalForm";


const Product =()=>{
    const [open,setOpen] = useState(false)
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(true)
    const {isSpinning,fetchCart,getProductData,err,data} = useCart()
    useEffect(()=>{
        if(router.isReady){
            const fetchProduct =async()=>{
                await getProductData(router.query.id)
                setIsLoading(false)
            }
            fetchProduct()
        }
    },[router.isReady])
    if(isLoading){
        return (
            <div className="page">
                <Head>
                    <title>{"Loading.."}</title>
                </Head>
                <PageWrapper>
                        <div className={styles.wrapper}>
                            <div className={"image_skeleton_aspect"}>
                                <Skeleton
                                    attributes={{
                                        height:'100%',
                                        width:'100%'
                                    }}
                                />
                            </div>
                            <article className={styles.details}>
                                <Skeleton
                                    attributes={{
                                        height:'1rem',
                                        width:'17rem'
                                    }}
                                />
                                <Skeleton
                                    attributes={{
                                        height:'1rem',
                                        width:'15rem'
                                    }}
                                />
                                <Skeleton
                                    attributes={{
                                        height:'1rem',
                                        width:'20rem'
                                    }}
                                />
                                <div className={styles.buttons_wrapper}>
                                <Skeleton
                                    attributes={{
                                        height:'2.7rem',
                                        width:'min(100%,30rem)'
                                    }}
                                />
                                <Skeleton
                                    attributes={{
                                        height:'2.7rem',
                                        width:'min(100%,30rem)'
                                    }}
                                />
                                </div>
                            </article>
                        </div>    
                </PageWrapper>    
            </div>
        )
    }
    else{
        return (
            <div className="page">
                <Head>
                    <title>{'auth'}</title>
                </Head>
                <PageWrapper>
                        <div className={styles.wrapper}>
                            <div className={'image_skeleton_aspect'}>
                                <Image src={data.assets[0].url} layout='intrinsic' height={'600'} width={'600'}/>
                            </div>
                            <article className={styles.details}>
                                <legend className={styles.details_header}>
                                    {data.name}
                                </legend>
                                <legend className={styles.details_price}>
                                    {data.price.formatted_with_symbol}    
                                </legend>
                                <legend className={styles.details_description}>
                                    {data.description?data.description:"No Description"}    
                                </legend>
                                {/*<button className="checkout_button" onClick={()=>{
                                    useCart({
                                        key:'add',
                                        payload:{
                                            id:user.id,
                                            product:data
                                        }
                                    })
                                }}>
                                    <h3>Add To Cart</h3>    
                            </button>*/}
                            <div className={styles.buttons_wrapper}>
                            {
                                user
                                ?
                                <AwaitButton states={{
                                    awaitState:isSpinning?'loading':'none',
                                    loadingText:'Adding',
                                    text:"Add to cart",
                                    action:()=>fetchCart({
                                            id:user.id,
                                            product:data
                                    })
                                }}/>
                                :
                                <AwaitButton states={{
                                    awaitState:'none',
                                    text:"Login to use cart",
                                    action:()=>router.push('/user')
                                }}/>
                            }
                            <AwaitButton states={{
                                awaitState:'none',
                                text:"Share",
                                action:()=>setOpen(true),
                                secondary:true
                            }}/>
                            
                            </div>
                        </article>
                    </div>
                    {
                        open
                        &&
                        <FunctionalModalForm states={{
                            title:'Share',
                            hook:()=>setOpen()
                        }}>
                            <h3>Using</h3>
                            <AwaitButton
                                states={{
                                    awaitState:'none',
                                    text:"WhatsApp",
                                    secondary:true
                                }}
                            />
                            <AwaitButton
                                states={{
                                    awaitState:'none',
                                    text:"Instagram",
                                    secondary:true
                                }}
                            />
                            <AwaitButton
                                states={{
                                    awaitState:'none',
                                    text:"Twitter",
                                    secondary:true
                                }}
                            />
                        </FunctionalModalForm>
                    }
                </PageWrapper>    
            </div>
        )
    }
}

export default Product;