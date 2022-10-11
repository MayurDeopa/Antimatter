import { Container, Progress } from "material-gas-ui"
import Head from "next/head"

import { useEffect,useState } from "react"

import styles from '../../styles/misc.module.css'
import PrimarySpinner from "../Loaders/PrimarySpinner"
import AntiMatterLogo from "./AntiMatterLogo"


const PageTransitionComponent =({open})=>{
    let animationClass = open ? styles.page_inn: styles.page_out
    return(
        <Container className={`${styles.page_transition}`} styles={{justifyContent:'center',top:0}}>
            <Head>
                <title>Loading...</title>
            </Head>
            <AntiMatterLogo size={60} animated/>
           {/* <Progress loaderColor="white" bgColor="var(--secondary-theme-light)" width="10rem"/>*/}
        </Container>
    )
}

export default PageTransitionComponent;