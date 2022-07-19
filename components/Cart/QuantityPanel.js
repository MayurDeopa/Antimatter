import styles from '../../styles/cart.module.css'
import {BiPlus,BiMinus} from 'react-icons/bi'
import useCart from '../../lib/drawer/customhooks/useCart'

const QuantityPanel =({product})=>{
    const {isSpinning,modifyQty} = useCart()
    {/*if(isSpinning){
        return (
            <div className={styles.cart_section_log_quantity}>
                <div className={styles.operator_button}>
                    <BiPlus/>
                </div>
                <p>-</p>
                <div className={styles.operator_button}>
                    <BiMinus/>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className={styles.cart_section_log_quantity}>
                <div className={styles.operator_button} onClick={()=>modifyQty({
                    fasgsa:'fasg'
                })}>
                    <BiPlus/>
                </div>
                <p>{props.quantity}</p>
                <div className={styles.operator_button}>
                    <BiMinus/>
                </div>
            </div>
        )
    }*/}
    return (
        <div className={styles.cart_section_log_quantity}>
            <div className={styles.operator_button} onClick={()=>modifyQty({
                    product:product,
                    query:'add'
                })}>
                {isSpinning?'-':<BiPlus/>}
            </div>
            <p>{product.quantity}</p>
            <div className={styles.operator_button} onClick={()=>modifyQty({
                    product:product,
                    query:'subtract'
                })}>
                {isSpinning?"-":<BiMinus/>}
            </div>
        </div>
    )
}

export default QuantityPanel;