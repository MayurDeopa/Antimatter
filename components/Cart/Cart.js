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

import {FiLock} from 'react-icons/fi'
import MainContainer from "../Misc/MainContainer"
import useCart from "../../lib/drawer/customhooks/useCart"


const Cart =({open,action})=>{
    const {cartLoader} = useStore();
    const [visible,setVisible] = cartLoader;
    const {isEmpty,cart,checkout} = useCart()
    return(
        <Portal
            container={'modal-root'}
        >
            <div id="cart">
                <div className={open?styles.cart:`${styles.cart} ${styles.cart_hidden}`}>
                        <Form
                            title={"Cart"}
                            action={()=>checkout(cart?.hosted_checkout_url)}
                            height='100%'
                        >
                            <BasicProgress
                                width={'100%'}
                                visible={visible}
                                bgColor={'var(--secondary-theme-color)'}
                            />
                            <CartItems/>                        
                            <MainContainer
                                direction={'column'}
                            >
                                <MainContainer>
                                    <h4  style={{'width':'100%'}}>SubTotal :</h4>
                                    <p>{visible?'-':cart.subtotal.formatted_with_symbol}</p>
                                </MainContainer>
                                <PrimaryButton
                                    text={'Checkout'}
                                    type={'submit'}
                                    icon={<FiLock/>}
                                    awaitState={isEmpty?'disabled':'none'}
                                />
                            </MainContainer>
                        </Form>
                    </div>
                    <Modal action={action} hidden={!open}/>
            </div>
        </Portal>
    )
}

export default Cart;