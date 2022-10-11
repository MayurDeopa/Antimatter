import { Button, Container } from "material-gas-ui"
import {BsFillBagCheckFill} from 'react-icons/bs'
import PrimarySpinner from "../../components/Loaders/PrimarySpinner"


import styles from '../../styles/misc.module.css'
import { useRouter } from "next/router"


const ThankYou = ()=>{
    let router = useRouter()


    

    return(
        <Container  className={styles.thankyou}>
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
                    action={()=>router.push('/')}
                />
            </Container>
        </Container>
    )
}

export default ThankYou;