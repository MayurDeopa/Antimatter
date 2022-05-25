import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { useQuery } from "react-query";
import useCart from "../../../lib/drawer/customhooks/useCart";

import {TwitterIcon,TwitterShareButton,InstapaperIcon,InstapaperShareButton} from 'next-share'
import styles from '../../../styles/Product.module.css'
import { getProductById } from "../../../services/api/products";
import { shareables } from "../../../lib/drawer/shareables";
import { Store } from "../../../lib/drawer/context/StoreContext";


import LinkBtn from '../../../components/Misc/LinkBtn'
import ErrorPopUp from '../../../components/Misc/ErrorPopUp'
import PageWrapper from "../../../components/PageWrapper";
import Head from 'next/head'
import Image from 'next/image'
import AwaitButton from "../../../components/Loaders/AwaitButton";
import Skeleton from "../../../components/Loaders/Skeleton";
import FunctionalModalForm from "../../../components/Misc/FunctionalModalForm";
import useModal from "../../../lib/drawer/customhooks/useModal";

import  Toast  from "../../../components/Misc/Toast";
import Message from '../../../components/basic/Message'
import Breadcrumb from "../../../components/Navigations/Breadcrumb";


const Product =()=>{
    const {open,toggleModal} = useModal()
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(true)
    const {isSpinning,fetchCart,getProductData,err,data,cartMessage} = useCart()
    useEffect(()=>{
        if(router.isReady){
            const fetchProduct =async()=>{
                await getProductData(router.query.id)
                setIsLoading(false)
            }
            fetchProduct()
        }
    },[router.isReady])
    const url = window.location.href
    if(isLoading){
        return (
            <>
                <Head>
                    <title>{"Loading.."}</title>
                </Head>
                <PageWrapper>
                    <Breadcrumb>
                        <Skeleton 
                            height={'1.8rem'}
                            width={'9rem'}
                        />
                    </Breadcrumb>
                        <div className={styles.wrapper}>
                            <div className={"image_skeleton_aspect"}>
                                <Skeleton
                                     height={'100%'}
                                     width={'100%'}
                                />
                            </div>
                            <article className={styles.details}>
                                <Skeleton
                                    height={'1rem'}
                                    width={'6rem'}
                                />
                                <Skeleton
                                    height={'1rem'}
                                    width={'7rem'}
                                />
                                <Skeleton
                                    height={'1rem'}
                                    width={'20rem'}
                                />
                                <div className={styles.buttons_wrapper}>
                                <Skeleton
                                    height={'2.7rem'}
                                    width={'min(100%,30rem)'}
                                />
                                <Skeleton
                                    height={'2.7rem'}
                                    width={'min(100%,30rem)'}
                                />
                                </div>
                            </article>
                        </div>    
                </PageWrapper>    
            </>
        )
    }
    else if(err){
        return(
            <ErrorPopUp>
                <h3>{err}</h3>
                <LinkBtn link={{
                    url:'/shop',
                    text:"Go back"
                }}/>
            </ErrorPopUp>
        )
    }
    else{
        return (
            <>
                <Head>
                    <title>{data.name}</title>
                </Head>
                <PageWrapper>
                    <Breadcrumb>
                        <div>
                            Home
                        </div>
                        /
                        <div>
                            Shop
                        </div>/
                        <div>{router.query.category}</div>
                        /
                        <div>{data.name}</div>
                    </Breadcrumb>
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
                                <AwaitButton
                                awaitState={isSpinning?'loading':'none'}
                                loadingText={'Adding'}
                                text={"Add to cart"}
                                action={()=>fetchCart({
                                        id:user._id,
                                        product:data
                                })}
                                />
                                :
                                <AwaitButton 
                                    awaitState={'none'}
                                    text={"Login to use cart"}
                                    action={()=>router.push('/user')}
                                />
                            }
                            <AwaitButton 
                                awaitState={'none'}
                                text={"Share"}
                                action={toggleModal}
                                secondary={true}
                            />
                            
                            </div>
                        </article>
                    </div>
                    {
                        open
                        &&
                        <FunctionalModalForm states={{
                            title:'Share',
                            hook:toggleModal
                        }}>
                            <div style={{
                                display:'flex',
                                justifyContent:'space-around',
                                width:'100%'
                            }}>
                                {shareables.map((s,i)=>{
                                return (
                                    <s.button
                                        url={url}
                                        key={i}
                                    >
                                        <s.icon size={30} round/>
                                    </s.button>
                                )
                            })}
                            </div>
                        </FunctionalModalForm>
                    }
                    {
                        cartMessage
                        &&
                        <Toast>
                            <Message
                                states={cartMessage}
                            />
                        </Toast>
                    }
                </PageWrapper>    
            </>
        )
    }
}

export default Product;