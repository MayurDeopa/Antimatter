import styles from '../../styles/cart.module.css'
import {BiPlus,BiMinus} from 'react-icons/bi'
import useCart from '../../lib/drawer/customhooks/useCart'

const QuantityPanel =({props})=>{
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
            <div className={styles.operator_button_disabled} >
                <BiPlus/>
            </div>
            <p>{props.quantity}</p>
            <div className={styles.operator_button_disabled}>
                <BiMinus/>
            </div>
        </div>
    )
}

export default QuantityPanel;