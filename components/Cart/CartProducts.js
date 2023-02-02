import styles from '../../styles/cart.module.css'
import Image from 'next/image'
import QuantityPanel from './QuantityPanel'
import Skeleton from '../Loaders/Skeleton'
import useCart from '../../lib/drawer/customhooks/useCart'
import MainContainer from '../Misc/MainContainer'

import { useState } from 'react'

import GasButton from '../Loaders/GasButton'

const CartProducts = ({product,loading})=>{
    const {removeItem} = useCart()
    const [isLoading,setIsLoading] = useState(false)
    const handleRemove =async(id)=>{
        setIsLoading(true)
        await removeItem(id)
        setIsLoading(false)
    }

    if(loading){
        return (
            <div className={styles.cart_section_logs}>
    
                    <>
                        <div className='image_skeleton_aspect'>
                            <Skeleton 
                                height={'100%'}
                                width={'100%'}
                            />
                        </div>
                        <Skeleton 
                            height={'0.7rem'}
                            width={'min(7rem,100%)'}
                        />
                        <Skeleton 
                            height={'0.7rem'}
                            width={'min(7rem,100%)'}
                        />
                    </>
            </div>
        )
    }
    else{
        return (
            <MainContainer
                maxWidth={'100%'}
                direction={'column'}
            >
                <div className={styles.cart_section_logs}>
    
                        <Image src={product.image.url}   width={300} height={300} alt=''/>
                        <MainContainer
                            direction={'column'}
                        >
                            <p style={{'fontWeight':'bolder'}}>{product.product_name}</p>
                            {product.selected_options.map((o,i)=>{
                                return (
                                        <p key={i}>{o.group_name} : {o.option_name}</p>
                                )
                            })}
                        </MainContainer>
                        
                        <p>{product.line_total.formatted_with_symbol}</p>
                        
                        {/*
                        <QuantityPanel product={product}/>
                        <p 
                            onClick={()=>removeItem(product.id)}
                            className={styles.remove}
                        >
                            Remove
                </p>*/}
                    
                </div>
                <MainContainer>
                    <QuantityPanel product={product}/>
                    <GasButton
                        text={!isLoading &&'Remove' }
                        action={()=>handleRemove(product.id)}
                        rippleColor='var(--primary-theme-color)'
                        loading ={isLoading}
                        variant='secondary'
                    />
                </MainContainer>
            </MainContainer>
        )
    }
}

export default CartProducts;