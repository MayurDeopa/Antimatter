import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import useCart from "../../../lib/drawer/customhooks/useCart";

import styles from '../../../styles/Product.module.css'
import { shareables } from "../../../lib/drawer/shareables";
import { Store } from "../../../lib/drawer/context/StoreContext";


import LinkBtn from '../../../components/Misc/LinkBtn'
import ErrorPopUp from '../../../components/Misc/ErrorPopUp'
import PageWrapper from "../../../components/PageWrapper";
import Head from 'next/head'
import Image from 'next/image'
import PrimaryButton from "../../../components/Loaders/PrimaryButton";
import SecondaryButton from "../../../components/Loaders/SecondaryButton";
import Skeleton from "../../../components/Loaders/Skeleton";
import FunctionalModalForm from "../../../components/Misc/FunctionalModalForm";
import useModal from "../../../lib/drawer/customhooks/useModal";

import  Toast  from "../../../components/Misc/Toast";
import Message from '../../../components/basic/Message'
import Breadcrumb from "../../../components/Navigations/Breadcrumb";
import Panel from "../../../components/Panel";
import IconBtn from "../../../components/Misc/IconBtn";
import MainContainer from '../../../components/Misc/MainContainer'

const sizes =[
    {
        title:'small',
        icon:'S'
    },
    {
        title:'medium',
        icon:'M'
    },
    {
        title:'large',
        icon:'L'
    },
    {
        title:'extra large',
        icon:'XL'
    },
]


const Product =()=>{
    const {open,toggleModal} = useModal()
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const router = useRouter()
    const category = router.query.category
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
    const url = 'fadjn'
    if(isLoading){
        return (
            <>
                <Head>
                    <title>{"Loading.."}</title>
                </Head>
                <PageWrapper>
                    <Panel
                        height={'auto'}
                        width={'100%'}
                    >
                        <Skeleton
                            height={'1.4rem'}
                            width={'9rem'}
                        />
                    </Panel>
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
                                <Skeleton
                                    height={'1rem'}
                                    width={'6rem'}
                                />
                                <MainContainer>
                                    <Skeleton
                                            height={'2rem'}
                                            width={'3rem'}
                                        />
                                        <Skeleton
                                            height={'2rem'}
                                            width={'3rem'}
                                        />
                                </MainContainer>
                                <div className={styles.buttons_wrapper}>
                                    <Skeleton
                                        height={'2.4rem'}
                                        width={'min(100%,30rem)'}
                                    />
                                    <Skeleton
                                        height={'2.4rem'}
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
                <LinkBtn 
                    url={'/shop'}
                    text={"Go back"}
                />
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
                    <Breadcrumb
                        paths={[
                            {
                                title:'Shop',
                                path:'/shop'
                            },
                            {
                                title:category,
                                path:`/shop/${category}`
                            },
                            {
                                title:data.name,
                                path:`/shop/${category}/${router.query.id}`
                            }
                        ]}
                    />
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
                            <legend style={{
                                display:'flex',
                                flexDirection:'column',
                                gap:'5px'
                            }}>
                                    <span>
                                        Select size
                                    </span>
                                    <MainContainer>
                                        {sizes.map((s,i)=>{
                                            return(
                                                <IconBtn
                                                    key={i}
                                                    height={'auto'}
                                                    width={'3rem'}
                                                >
                                                    <p>{s.icon}</p>
                                                </IconBtn>
                                            )
                                        })}
                                    </MainContainer>
                                </legend>
                            <div className={styles.buttons_wrapper}>
                            {
                                user
                                ?
                                <PrimaryButton
                                awaitState={isSpinning?'loading':'none'}
                                loadingText={'Adding'}
                                text={"Add to cart"}
                                action={()=>fetchCart({
                                        id:user._id,
                                        product:data
                                })}
                                />
                                :
                                <PrimaryButton 
                                    awaitState={'none'}
                                    text={"Login to use cart"}
                                    action={()=>router.push('/user')}
                                />
                            }
                            <SecondaryButton 
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
                        <FunctionalModalForm 
                            maxWidth={'30rem'}
                            title={'Share'}
                            hook={toggleModal}
                        >
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