import styles from '../../styles/cart.module.css'
import Image from 'next/image'
import shirt from '../../public//shirt.jpg'
import { useQuery } from 'react-query'
import { getProductById } from '../../services/api/products'
import PrimaryLoader from '../Loaders/PrimaryLoader'
import QuantityPanel from './QuantityPanel'
import Skeleton from '../Loaders/Skeleton'

const CartProducts = ({product,states})=>{
    if(states?.loading){
        return (
            <div className={styles.cart_section_logs}>
    
                    <>
                        <div className='image_skeleton_aspect'>
                            <Skeleton attributes={{
                                height:'100%',
                                width:'100%'
                            }}/>
                        </div>
                        <Skeleton attributes={{
                            height:'0.7rem',
                            width:'min(7rem,100%)'
                        }}/>
                        <Skeleton attributes={{
                            height:'0.7rem',
                            width:'50%'
                        }}/>
                    </>
            </div>
        )
    }
    else{
        return (
            <div className={styles.cart_section_logs}>
    
                    <>
                        <Image src={product.img}   width={300} height={300} alt=''/>
                        <QuantityPanel props={product}/>
                        <p>{product.price * product.quantity}</p>
                    </>
            </div>
        )
    }
}

export default CartProducts;