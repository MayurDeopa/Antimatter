import Modal from "../Misc/Modal"
import Form from '../Misc/Form'    


import styles from '../../styles/cart.module.css'
import OptOnput from "../Misc/OptInput"
import PrimaryButton from '../Loaders/PrimaryButton'
import Portal from "../Portal"
import CartItems from "./CartItems"



const Cart =({open,action})=>{
    return(
        <Portal
            container={'modal-root'}
        >
            <div id="cart">
            <div className={open?styles.cart:`${styles.cart} ${styles.cart_hidden}`}>
                        <Form
                            title={"Cart"}
                            action={()=>console.log('checkout')}
                            height='100%'
                        >
                            <CartItems/>
                            <PrimaryButton
                                text={'Checkout'}
                                type={'submit'}
                            />
                        </Form>
                    </div>
                    <Modal action={action} hidden={!open}/>
            </div>
        </Portal>
    )
}

export default Cart;