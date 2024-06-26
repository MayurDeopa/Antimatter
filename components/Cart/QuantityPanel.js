import styles from '../../styles/cart.module.css'
import {BiPlus,BiMinus} from 'react-icons/bi'
import useCart from '../../lib/drawer/customhooks/useCart'
import MainContainer from '../Misc/MainContainer'

const QuantityPanel =({product})=>{
    const {modifyQty} = useCart()
    return (
        <MainContainer
            direction={'column'}
            gap={'10px'}
            width={'50%'}
        >
            <div className={styles.cart_section_log_quantity}>
                <div className={styles.operator_button} onClick={()=>modifyQty(product.id,product.quantity + 1)}>
                    <BiPlus/>
                </div>
                <p>{product.quantity}</p>
                <div className={styles.operator_button} onClick={()=>modifyQty(product.id,product.quantity - 1)}>
                    <BiMinus/>
                </div>
            </div>
            
        </MainContainer>
    )
}

export default QuantityPanel;