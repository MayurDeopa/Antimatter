import { useState } from 'react';

import useCart from '../../../lib/drawer/customhooks/useCart';

import styles from '../../../styles/Product.module.css'
import { shareables } from "../../../lib/drawer/shareables";

import {AiFillInfoCircle} from 'react-icons/ai'
import PageWrapper from '../../../components/PageWrapper';
import Head from 'next/head'

import PrimaryButton from '../../../components/Loaders/PrimaryButton'
import SecondaryButton from '../../../components/Loaders/SecondaryButton'
import Breadcrumb from '../../../components/Navigations/Breadcrumb';
import useModal from '../../../lib/drawer/customhooks/useModal';


import MainContainer from '../../../components/Misc/MainContainer';
import ProductSlider from '../../../components/Display/ProductSlider'
import Form from '../../../components/Misc/Form';
import RadioGroup from '../../../components/Misc/RadioGroup'
import Share from '../../../components/Display/Share'

import { getProductById } from "../../../services/api/products";
import { setScroll } from "../../../lib/drawer/disableScroll";
import {  Container } from "material-gas-ui";
import SizeChart from "../../../components/Display/SizeChart";
import { useRouter } from 'next/router';





const Product =({data})=>{
    const [sizeChartOpen,toggleSizeChart] = useState(false)
    const {open,toggleModal} = useModal()
    const {fetchCart,handleOptions,options} = useCart(data)
    const seo = data.seo
    const router = useRouter()
    const {category} = router.query
    const location = router.asPath

    const handleSizeChartToggle =()=>{
        toggleSizeChart(!sizeChartOpen)
        setScroll(!sizeChartOpen)
    }

        return (
            <>
                <Head>
                    <title>{seo.title}</title>
                    <meta
                        name="description"
                        content={seo.description}
                    />
                </Head>
                <PageWrapper>
                        <div className={styles.wrapper} >
                            <ProductSlider
                                images={data.assets}
                        />
                            <div className={styles.description}>
                                <h2>{data.name}</h2>
                                <h3>{data.price.formatted_with_symbol}</h3>
                            </div>
                    </div>
                    
                        <Share
                            link={`https://antimatterclothing.vercel.app${location}`}
                            shareIcons={shareables}
                            toggleModal={toggleModal}
                            visible={open}
                     />
                     <SizeChart
                        open={sizeChartOpen}
                        toggle={handleSizeChartToggle}
                     />
                    
                            <Form
                                maxWidth={'30rem'}
                                customClasses={styles.details}
                                action={()=>fetchCart(data.id,1,options)}
                            >
                               <MainContainer
                                    maxWidth={'100%'}
                                    direction={'column'}
                                    customClasses={styles.details_container}
                                >
                                    
                               </MainContainer>
                                {data.variant_groups.map((v,i)=>{
                                    return(
                                        <MainContainer
                                            maxWidth={'100%'}
                                            direction={'column'}
                                            customClasses={styles.details_container}
                                            key={i}
                                            gap={'5px'}
                                        >
                                           {v.name==='Size' ?(
                                            <Container styles={{justifyContent:'center',alignItems:'center'}}>
                                                <p>{v.name}</p>
                                                <AiFillInfoCircle onClick={handleSizeChartToggle} style={{cursor:'pointer'}}/>
                                            </Container>
                                           )
                                            :
                                            <p>{v.name}</p>
                                        }
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
                                        width={'20rem'}
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
                        
                    
                </PageWrapper>    
            </>
        )
    
}


export async function getStaticProps(context) {
    const {params} = context
    const id = params.id
    const data = await getProductById(id)

    return {
      props: {
        data,
      },
    }
  }
export async function getStaticPaths(){
    return{
        paths:[],
        fallback:'blocking'
    }
}

export default Product;