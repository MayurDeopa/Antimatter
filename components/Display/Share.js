

import FunctionalModalForm from "../Misc/FunctionalModalForm"
import OptInput from "../Misc/OptInput"
import Portal from "../Portal";
import Form from "../Misc/Form";
import MainContainer from "../Misc/MainContainer";
import Modal from "../Misc/Modal";

import styles from '../../styles/cart.module.css'
import { Button, Container, Drawer } from "material-gas-ui";
import { toast } from "react-toastify";

const Share=({link,shareIcons,toggleModal,visible})=>{

    const handleCopy = ()=>{
        navigator.clipboard.writeText(link)
        toast.success('Copied to clipboard')
    }

    return(
        <Portal
            container={'modal-root'}
        >
            <Drawer
                styles={{backgroundColor:"transparent"}}
                open={visible}
                action={toggleModal}
            >
                <Form
                    title={"Share"}
                    height='100%'
                    action={handleCopy}
                    >                      
                    <Container>
                    <OptInput
                        value={link}
                        placeholder={'Link'}
                    />
                    <Button 
                        text="Copy" 
                        styles={{backgroundColor:'var(--secondary-theme-lighter)'}}
                        rippleColor='white'    
                        type="submit"
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
            </Drawer>
        </Portal>
    )
}

export default Share;