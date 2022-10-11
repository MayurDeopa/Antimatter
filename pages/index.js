import {  useEffect, useState } from "react";
import useCart from "../lib/drawer/customhooks/useCart";

import styles from '../styles/Product.module.css'
import { shareables } from "../lib/drawer/shareables";


import PageWrapper from "../components/PageWrapper";
import Head from 'next/head'
import PrimaryButton from "../components/Loaders/PrimaryButton";
import SecondaryButton from "../components/Loaders/SecondaryButton";
import useModal from "../lib/drawer/customhooks/useModal";

import  Toast  from "../components/Misc/Toast";
import Message from '../components/basic/Message'
import MainContainer from '../components/Misc/MainContainer'
import ProductSlider from "../components/Display/ProductSlider";
import Form from "../components/Misc/Form";
import RadioGroup from "../components/Misc/RadioGroup";
import Share from "../components/Display/Share";
import PrimarySpinner from "../components/Loaders/PrimarySpinner";




const Product =()=>{
    const {open,toggleModal} = useModal()
    const [isLoading,setIsLoading] = useState(true)
    const {fetchCart,getProductData,data,cartMessage,variants,options,handleOptions} = useCart()
    useEffect(()=>{
            const fetchProduct =async()=>{
                await getProductData('prod_VKXmwDE8rWorgD')
                setIsLoading(false)        
            }
            fetchProduct()
            
        
    },[])
    if(isLoading){
        return (
            <>
                <Head>
                    <title>{"Loading.."}</title>
                </Head>
                <PageWrapper>
                    <PrimarySpinner/>
                </PageWrapper>    
            </>
        )
    }
    else{
        return (
            <>
                <Head>
                    <title>{data.name}</title>
                </Head>
                <PageWrapper>
                   {/* <Breadcrumb
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
                    />*/}
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
                            action={()=>fetchCart(data.id,1,options)}
                        >
                           <MainContainer
                                maxWidth={'100%'}
                                direction={'column'}
                                customClasses={styles.details_container}
                            >
                                <h3>{data.price.formatted_with_symbol}</h3>
                                <div dangerouslySetInnerHTML={{__html:data.description}}></div>
                           </MainContainer>
                            {variants.map((v,i)=>{
                                return(
                                    <MainContainer
                                        maxWidth={'100%'}
                                        direction={'column'}
                                        customClasses={styles.details_container}
                                        key={i}
                                        gap={'5px'}
                                    >
                                        <p>{v.name}</p>
                                        <RadioGroup
                                            state={v.options}
                                            name={v.name}
                                            action={(e)=>handleOptions(v.id,e.target.value)}
                                        />
                                    </MainContainer>
                                )
                            })}
                            <div className={styles.buttons_wrapper}>
                            
                                <PrimaryButton 
                                    text={"Add to cart"}
                                    width={'15rem'}
                                    type={'submit'}
                                />
                            
                            <SecondaryButton 
                                awaitState={'none'}
                                text={"Share"}
                                action={toggleModal}
                                width={'10rem'}
                            />
                            
                            </div>
                        </Form>
                    </div>
                    
                        <Share
                            link={window.location}
                            shareIcons={shareables}
                            toggleModal={toggleModal}
                            visible={open}
                     />
                    
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