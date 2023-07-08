import Form from '../Misc/Form'    


import Portal from "../Portal"
import CartItems from "./CartItems"
import BasicProgress from "../Loaders/BasicProgress"
import { useStore } from "../../lib/drawer/context/StoreContext"

import {FiLock} from 'react-icons/fi'
import MainContainer from "../Misc/MainContainer"
import useCart from "../../lib/drawer/customhooks/useCart"
import {  Drawer } from "material-gas-ui"
import GasButton from '../Loaders/GasButton'
import {MdClose} from 'react-icons/md'
import Skeleton from '../Loaders/Skeleton'
import CartDrawer from './CartDrawer'

const Cart =({open,action})=>{
    const {cartLoader} = useStore();
    const [visible,setVisible] = cartLoader;
    const {isEmpty,cart,checkout} = useCart()
    return(
        <Portal
            container={'modal-root'}
        >
            <CartDrawer
                open={open}
                action={action}
            >
                <Form 
                            backgroundColor={'var( --secondary-theme-color)'}
                            title={"Cart"}
                            height='100%'
                            action={()=>checkout(cart.id)}
                        >
                            <CartItems/>                        
                            {
                                !isEmpty
                                &&
                                cart
                                &&
                                <MainContainer
                                direction={'column'}
                                >
                                    <MainContainer>
                                        <h4  style={{'width':'100%'}}>SubTotal :</h4>
                                        <p>{visible?'-':cart.subtotal.formatted_with_symbol}</p>
                                    </MainContainer>
                                    <GasButton
                                        text="Checkout"
                                        icon={<FiLock/>}
                                        type='submit'
                                        styles={{width:'100%'}}
                                        loading={visible}
                                        rippleTimeout={600}
                                        variant='primary'
                                    />
                                </MainContainer>
                                }
                                
                            <div
                                style={{
                                    position:'absolute',
                                    right:"14px",
                                    fontSize:'20px',
                                    cursor:'pointer'
                                }}
                                onClick={action}
                            >
                                <MdClose/>
                            </div>
                        </Form>
            </CartDrawer>
        </Portal>
    )
}

export default Cart;