import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/skeleton.module.css'


const BlurImage =({attributes})=>{
    const [isLoading,setIsLoading] = useState(true)
    return (
        <div style={{
            opacity:isLoading?0.5:1
        }}>
            <Image
            width={attributes.width}
            height={attributes.height}
            src={attributes.src}
            alt=''
            onLoadingComplete={()=>setIsLoading(false)}
            />
        </div>
    )
}

export default BlurImage;