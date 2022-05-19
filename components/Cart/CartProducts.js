import styles from '../../styles/cart.module.css'
import Image from 'next/image'
import QuantityPanel from './QuantityPanel'
import Skeleton from '../Loaders/Skeleton'

const CartProducts = ({product,states})=>{
    if(states?.loading){
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