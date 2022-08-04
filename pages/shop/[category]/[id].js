import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useStore } from "../../../lib/drawer/context/StoreContext";
import useCart from "../../../lib/drawer/customhooks/useCart";

import styles from '../../../styles/Product.module.css'
import { shareables } from "../../../lib/drawer/shareables";


import LinkBtn from '../../../components/Misc/LinkBtn'
import ErrorPopUp from '../../../components/Misc/ErrorPopUp'
import PageWrapper from "../../../components/PageWrapper";
import Head from 'next/head'
import PrimaryButton from "../../../components/Loaders/PrimaryButton";
import SecondaryButton from "../../../components/Loaders/SecondaryButton";
import Skeleton from "../../../components/Loaders/Skeleton";
import useModal from "../../../lib/drawer/customhooks/useModal";

import  Toast  from "../../../components/Misc/Toast";
import Message from '../../../components/basic/Message'
import Breadcrumb from "../../../components/Navigations/Breadcrumb";import IconBtn from "../../../components/Misc/IconBtn";
import MainContainer from '../../../components/Misc/MainContainer'
import ProductSlider from "../../../components/Display/ProductSlider";
import Form from "../../../components/Misc/Form";
import RadioGroup from "../../../components/Misc/RadioGroup";
import Share from "../../../components/Display/Share";
import OptInput from "../../../components/Misc/OptInput";
import Select from "../../../components/Misc/Select";




const Product =()=>{
    const {open,toggleModal} = useModal()
    const {userState} = useStore()
    const [user,setUser] = userState
    const router = useRouter()
    const category = router.query.category
    const [isLoading,setIsLoading] = useState(true)
    const [size,setSize] = useState()
    const isChecked =(s)=>s===size
    const handleChange =(e)=>{
        setSize(e.currentTarget.value)
    }
    const {isSpinning,fetchCart,getProductData,err,data,cartMessage,variants} = useCart()
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
            <>
                <Head>
                    <title>{"Loading.."}</title>
                </Head>
                <PageWrapper>
                    <MainContainer
                        width={'100%'}
                        maxWidth={'100%'}
                        justify={'flex-start'}
                    >
                        <Skeleton
                            height={'1.4rem'}
                            width={'9rem'}
                        />
                    </MainContainer>
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
                                    width={'4rem'}
                                />
                                <Skeleton
                                    height={'1rem'}
                                    width={'5rem'}
                                />
                                <Skeleton
                                    height={'0.8rem'}
                                    width={'100%'}
                                />
                                <Skeleton
                                    height={'0.8rem'}
                                    width={'90%'}
                                />
                                <Skeleton
                                    height={'0.8rem'}
                                    width={'50%'}
                                />
                                
                                <Skeleton
                                    height={'0.8rem'}
                                    width={'30%'}
                                />
                                <Skeleton
                                    height={'3rem'}
                                    width={'100%'}
                                />
                                <Skeleton
                                    height={'3rem'}
                                    width={'100%'}
                                />
                                <div className={styles.buttons_wrapper}>
                                    <Skeleton
                                        height={'3rem'}
                                        width={'min(100%,30rem)'}
                                    />
                                    <Skeleton
                                        height={'3rem'}
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
                            {/*<div className={'image_skeleton_aspect'}>
                                <Image src={data.assets[0].url} layout='intrinsic' height={'600'} width={'600'}/>
                            </div>*/}
                            <ProductSlider
                                images={data.assets}
                        />
                            
                        <Form
                            customClasses={styles.details}
                            title={data.name}
                            headerSide={'flex-start'}
                            action={()=>fetchCart({
                                id:user._id,
                                product:data
                        })}

                        >
                           <MainContainer
                                maxWidth={'100%'}
                                direction={'column'}
                                customClasses={styles.details_container}
                            >
                                <p>{data.price.formatted_with_symbol}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                           </MainContainer>
                            {variants.map((v,i)=>{
                                return(
                                    <MainContainer
                                        maxWidth={'100%'}
                                        direction={'column'}
                                        customClasses={styles.details_container}
                                        key={i}
                                    >
                                        <p>{v.name}</p>
                                        <Select
                                            title={`Select a ${v.name}`}
                                            options={v.options}
                                            required
                                        />
                                    </MainContainer>
                                        )
                            })}
                            <div className={styles.buttons_wrapper}>
                            {
                                user
                                ?
                                <PrimaryButton
                                awaitState={isSpinning?'loading':'none'}
                                loadingText={'Adding'}
                                text={"Add to cart"}
                                type='submit'
                                width={'100%'}
                                />
                                :
                                <SecondaryButton 
                                    awaitState={'none'}
                                    text={"Login to use cart"}
                                    width={'100%'}
                                    action={()=>router.push('/user')}
                                />
                            }
                            <SecondaryButton 
                                awaitState={'none'}
                                text={"Share"}
                                action={toggleModal}
                                width={'100%'}
                            />
                            
                            </div>
                        </Form>
                    </div>
                    {
                        open
                        &&
                        <Share
                            link={window.location}
                            shareIcons={shareables}
                            toggleModal={toggleModal}
                        />
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