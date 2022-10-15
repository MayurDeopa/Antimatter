import { Button, Container } from "material-gas-ui"
import {BsFillExclamationCircleFill} from 'react-icons/bs'
import Head from "next/head"

import styles from '../../styles/misc.module.css'



const OrderPending = ()=>{


    const handleRedirect =()=>{
        window.location.href = '/'
    }
    

    return(
        <Container  className={styles.thankyou}>
            <Head>
                <title>Order Pending</title>
            </Head>
            <Container
                styles={{
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <h1 style={{fontSize:'45px'}}>Oops  <BsFillExclamationCircleFill color="var(--error" size={35}/> </h1>
                <h2>Your order has been put on hold</h2>
                <h5>Any amount deducted will be refunded within 3- 5 working days</h5>
                <Button 
                    styles={{backgroundColor:'var(--secondary-theme-lighter)',color:'white',marginTop:'10px'}}
                    text="Back to store"
                    rippleColor='white'
                    variant='secondary'
                    action={handleRedirect}
                />
            </Container>
        </Container>
    )
}

export default OrderPending;