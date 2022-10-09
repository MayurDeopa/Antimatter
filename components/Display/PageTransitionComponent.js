import { Container } from "material-gas-ui"
import Head from "next/head"

import { useEffect,useState } from "react"

import styles from '../../styles/misc.module.css'
import AntiMatterLogo from "./AntiMatterLogo"


const PageTransitionComponent =({open})=>{
    let animationClass = open ? styles.page_inn: styles.page_out
    return(
        <Container className={`${styles.page_transition}`} styles={{justifyContent:'center',top:0}}>
            <Head>
                <title>Loading...</title>
            </Head>
            <AntiMatterLogo size={60} animated/>
        </Container>
    )
}

export default PageTransitionComponent;