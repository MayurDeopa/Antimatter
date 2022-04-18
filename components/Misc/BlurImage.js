import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/skeleton.module.css'


const BlurImage =({attributes})=>{
    const [isLoading,setIsLoading] = useState(true)
    return (
        <div>
            <Image
            width={attributes.width}
            height={attributes.height}
            src={attributes.src}
            alt=''
            onLoadingComplete={()=>setIsLoading(false)}
            className={isLoading?styles.wrapper:null}
            />
            <h3>{attributes.title}</h3>
        </div>
    )
}

export default BlurImage;