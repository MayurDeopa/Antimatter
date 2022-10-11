import { Button, Container } from "material-gas-ui"
import {BsFillBagCheckFill} from 'react-icons/bs'
import Head from "next/head"

import styles from '../../styles/misc.module.css'



const ThankYou = ()=>{


    const handleRedirect =()=>{
        window.location.href = '/'
    }
    

    return(
        <Container  className={styles.thankyou}>
            <Head>
                <title>Thank you</title>
            </Head>
            <Container
                styles={{
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <h1 style={{fontSize:'45px'}}>Thank you <BsFillBagCheckFill color="var(--success"/> </h1>
                <h2>Your order was completed sucessfully</h2>
                <h3>Please check your email for more details</h3>
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

export default ThankYou;