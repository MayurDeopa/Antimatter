import { useEffect } from "react";
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

const Product =()=>{
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const router = useRouter()
    const id = router.query.id
    const {isSpinning,fetchCart} = useCart()
    const {data,isLoading} = useQuery('getProductById',()=>getProductById(id))
    if(isLoading){
        return (
            <div className="page">
                <Head>
                    <title>{isLoading?"Loading..":data.name}</title>
                </Head>
                <PageWrapper>
                        <div className={styles.wrapper}>
                            <div className={styles.image}></div>
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
                                <Skeleton
                                    attributes={{
                                        height:'2.7rem',
                                        width:'min(100%,30rem)'
                                    }}
                                />
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
                    <title>{isLoading?"Loading..":data.name}</title>
                </Head>
                <PageWrapper>
                        <div className={styles.wrapper}>
                            <div className={styles.image}>
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
                            {
                                user
                                ?
                                <AwaitButton states={{
                                    awaitState:isSpinning?'loading':'none',
                                    text:"Add to cart",
                                    action:()=>fetchCart({
                                            id:user.id,
                                            product:data
                                    })
                                }}/>
                                :
                                <div className={styles.details_description}>
                                    <Link href={'/user'}>
                                        <div className="checkout_button">
                                            <h3>
                                                Login to use cart
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            }
                            </article>
                        </div>  
                </PageWrapper>    
            </div>
        )
    }
}

export default Product;