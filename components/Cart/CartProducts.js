import styles from '../../styles/cart.module.css'
import QuantityPanel from './QuantityPanel'
import Skeleton from '../Loaders/Skeleton'
import useCart from '../../lib/drawer/customhooks/useCart'
import MainContainer from '../Misc/MainContainer'

import NewImage from '../NewImage'

import { useState } from 'react'

import GasButton from '../Loaders/GasButton'
import { Container } from 'material-gas-ui'

import skeletonStyles from '../../styles/skeleton.module.css'
import PrimarySpinner from '../Loaders/PrimarySpinner'
import LinearIndefiniteProgress from '../Loaders/LinearIndefiniteProgress'

const CartProducts = ({product,loading})=>{
    const {removeItem} = useCart()
    const [isLoading,setIsLoading] = useState(false)
    const handleRemove =async(id)=>{
        setIsLoading(true)
        await removeItem(id)
        setIsLoading(false)
    }

    let progressWrapper ={
        backgroundColor:'var(--secondary-theme-color)',
        padding:'1rem',
        borderRadius:'16px',
        width:'15rem',
        maxWidth:'90%',
        height:'5rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    }

    if(loading){
        return (
            <span style={progressWrapper}>
                <LinearIndefiniteProgress/>
            </span>
        )
    }
    else{
        return (
            <MainContainer
                maxWidth={'100%'}
                direction={'column'}
            >
                <div className={styles.cart_section_logs}>
    
                        <NewImage src={product.image.url}   width={300} height={300} alt=''/>
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

/*
<div className={styles.cart_section_logs}>
    
                    <>
                        <div 
                            style={{
                                paddingTop: "100%",
                                height:'100%',
                                width:'100%'
                            }}
                            className={skeletonStyles.wrapper}
                            >
                            <Skeleton 
                                
                                height={'100%'}
                                width={'100%'}
                            />
                        </div>
                            
                        <Container
                            styles={{
                                flexDirection:'column',
                                justifyContent:'start'
                            }}
                        >
                            <Skeleton 
                                height={'8px'}
                                width={'min(7rem,100%)'}
                            />
                            <Skeleton 
                            height={'8px'}
                            width={'min(4rem,100%)'}
                        />
                        </Container>
                        <Skeleton 
                            height={'8px'}
                            width={'min(4rem,100%)'}
                        />
                    </>
            </div>
*/ 