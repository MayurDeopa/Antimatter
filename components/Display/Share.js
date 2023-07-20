

import FunctionalModalForm from "../Misc/FunctionalModalForm"
import OptInput from "../Misc/OptInput"
import Portal from "../Portal";
import Form from "../Misc/Form";
import CartDrawer from "../Cart/CartDrawer";

import styles from '../../styles/cart.module.css'
import {  Container, Drawer } from "material-gas-ui";
import GasButton from '../Loaders/GasButton'
import { toast } from "react-toastify";

const Share=({link,shareIcons,toggleModal,visible})=>{

    const handleCopy = ()=>{
        navigator.clipboard.writeText(link)
        toast.success('Copied to clipboard')
        toggleModal()
    }

    return(

            <CartDrawer
                styles={{backgroundColor:"transparent",maxWidth:'90%'}}
                open={visible}
                action={toggleModal}
            >
                <Form
                    backgroundColor={'var( --secondary-theme-color)'}
                    title={"Share"}
                    height='100%'
                    action={handleCopy}
                    >                      
                    <Container>
                    <OptInput
                        value={link}
                        placeholder={'Link'}
                    />
                    <GasButton 
                        text="Copy"    
                        type="submit"
                        variant='secondary'
                    />
                    </Container>
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
            </CartDrawer>

    )
}

export default Share;