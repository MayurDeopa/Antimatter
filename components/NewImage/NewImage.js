import Image from "next/image";
import {  useState } from "react";


import styles from '../../styles/Image.module.css'
import AntiMatterLogo from "../Display/AntiMatterLogo";

import BasicProgress from '../Loaders/BasicProgress'



const NewImage =(props)=>{

    const {
        src,
        alt='An image',
        height,
        width
    } = props

    const [loading,setLoading] = useState(true)

    const getAspectRatio =(height,width)=>{
        let ratio = width/height
        return `${(1/ratio)*100}%`
    }

    const containerClass = loading?`${styles.image_wrapper} ${styles.skeleton_wrapper}`:styles.image_wrapper

    const imageClassName = loading?`${styles.image} ${styles.image_hidden}`:styles.image

    return(
        <div className={containerClass} style={{paddingTop:getAspectRatio(height,width)}}>
            {loading && (
                 <div className={styles.logo_wrapper}>
                    <BasicProgress visible zIndex={10} position='static' width={'10rem'} bgColor='var(--secondary-theme-light)'/>
                </div>
            )}
            <Image src={src} alt={alt} layout='fill' className={imageClassName}  onLoadingComplete={()=>setLoading(false)}/>
        </div>
    )
}


export default NewImage;