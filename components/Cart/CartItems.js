
import styles from '../../styles/cart.module.css'

import CartProducts from '../Cart/CartProducts'


import { useStore } from '../../lib/drawer/context/StoreContext'

import { Button, Container } from 'material-gas-ui'

import LinkBtn from '../Misc/LinkBtn'

import {CgShoppingBag} from 'react-icons/cg'

const CartItems =()=>{
    const {cartState} = useStore()
    const [cart,setCart] = cartState

    if(!cart){
        return(
            <div className={styles.cart_items}>
                <CartProducts loading/>
            </div>
        )
    }

    if(!cart.line_items.length){
        return(
            <div className={styles.cart_items}>
                <Container
                    styles={{
                        flexDirection:'column',
                        alignItems:'center'
                    }}
                >
                    <p>Your cart is empty</p>
                    <LinkBtn
                        url={'/'}
                        text='Start Shopping'
                        icon={<CgShoppingBag size={20}/>}
                        width='15rem'
                    />
                </Container>
            </div>
        )
    }
    return(
        <div className={styles.cart_items}>
            {
                cart.line_items.map((c,index)=>{
                    return <CartProducts product={c} key={index}/>
                })
            }
        </div>
    )
    
}

export default CartItems;