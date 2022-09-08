

import FunctionalModalForm from "../Misc/FunctionalModalForm"
import OptInput from "../Misc/OptInput"
import Portal from "../Portal";
import Form from "../Misc/Form";
import MainContainer from "../Misc/MainContainer";
import Modal from "../Misc/Modal";

import styles from '../../styles/cart.module.css'

const Share=({link,shareIcons,toggleModal,visible})=>{
    return(
        <Portal
            container={'modal-root'}
        >
            <div id="cart">
                <div className={visible?styles.cart:`${styles.cart} ${styles.cart_hidden}`}>
                        <Form
                            title={"Share"}
                            height='100%'
                        >                      
                            <OptInput
                    isValid
                    
                    value={link}
                    placeholder={'Link'}
                />
                <div style={{
                    display:'flex',
                    justifyContent:'space-around',
                    width:'100%'
                }}>
                                    
                    {shareIcons.map((s,i)=>{
                    return (
                        <s.button
                            url={s.url}
                            key={i}
                        >
                            <s.icon size={40} round/>
                        </s.button>
                    )
                })}
                </div>
                        </Form>
                    </div>
                    <Modal action={toggleModal} hidden={!visible}/>
            </div>
        </Portal>
    )
}

export default Share;