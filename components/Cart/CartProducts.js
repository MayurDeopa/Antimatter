import styles from '../../styles/cart.module.css'
import Image from 'next/image'
import QuantityPanel from './QuantityPanel'
import Skeleton from '../Loaders/Skeleton'
import useCart from '../../lib/drawer/customhooks/useCart'

const CartProducts = ({product,loading})=>{
    const {removeItem} = useCart()
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
            <div className={styles.cart_section_logs}>
    
                    <>
                        <Image src={product.image.url}   width={300} height={300} alt=''/>
                        <QuantityPanel product={product}/>
                        <p>{product.line_total.formatted_with_symbol}</p>
                        <p 
                            onClick={()=>removeItem(product.id)}
                            className={styles.remove}
                        >
                            Remove
                        </p>
                    </>
                    
            </div>
        )
    }
}

export default CartProducts;