import { Container } from "material-gas-ui"

import styles from '../../styles/misc.module.css'
import AntiMatterLogo from "./AntiMatterLogo"


const PageTransitionComponent =({open})=>{
    return(
        <Container className={open?`${styles.page_transition} ${styles.page_in}`:`${styles.page_transition} ${styles.page_out}` } styles={{justifyContent:'center'}}>
            <AntiMatterLogo/>
        </Container>
    )
}

export default PageTransitionComponent;