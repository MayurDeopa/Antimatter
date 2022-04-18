import styles from '../../styles/cart.module.css'
import Image from 'next/image'
import shirt from '../../public//shirt.jpg'
import { useQuery } from 'react-query'
import { getProductById } from '../../services/api/products'
import PrimaryLoader from '../Loaders/PrimaryLoader'
import QuantityPanel from './QuantityPanel'

const CartProducts = ({product})=>{
    return (
        <div className={styles.cart_section_logs}>

                <>
                    <Image src={product.img} layout="responsive" width={20} height={20} alt=''/>
                    <QuantityPanel props={product}/>
                    <p>{product.price * product.quantity}</p>
                </>
        </div>
    )
}

export default CartProducts;