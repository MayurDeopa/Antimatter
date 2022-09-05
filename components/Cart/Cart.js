import Modal from "../Misc/Modal"
import Form from '../Misc/Form'    


import styles from '../../styles/cart.module.css'
import OptOnput from "../Misc/OptInput"
import PrimaryButton from '../Loaders/PrimaryButton'
import Portal from "../Portal"
import CartItems from "./CartItems"
import BasicProgress from "../Loaders/BasicProgress"
import { useState } from "react"
import { useStore } from "../../lib/drawer/context/StoreContext"



const Cart =({open,action})=>{
    const {cartLoader} = useStore();
    const [visible,setVisible] = cartLoader;
    return(
        <Portal
            container={'modal-root'}
        >
            <div id="cart">
                <div className={open?styles.cart:`${styles.cart} ${styles.cart_hidden}`}>
                        <Form
                            title={"Cart"}
                            action={()=>setVisible(!visible)}
                            height='100%'
                        >
                            <BasicProgress
                                width={'100%'}
                                visible={visible}
                                bgColor={'var(--secondary-theme-color)'}
                            />
                            <CartItems/>
                            <div 
                                style={{
                                    position:'sticky',
                                    bottom:'0'
                                }}
                            >
                                <PrimaryButton
                                    text={'Checkout'}
                                    type={'submit'}
                                />
                            </div>
                        </Form>
                    </div>
                    <Modal action={action} hidden={!open}/>
            </div>
        </Portal>
    )
}

export default Cart;