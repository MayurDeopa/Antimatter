import Link from "next/link"
import NewImage from "../NewImage"

import styles from '../../styles/Image.module.css'

const GridImage =({src,height,width,alt,href,product,name,price})=>{

    if(product){
        return(
            <Link
                href={href}>
                <div className={styles.grid_image}>
                    <NewImage
                        src={src}
                        height={height}
                        width={width}
                        alt={alt}
                    />
                    <div className={styles.product_info}>
                        {name}
                    </div>
                </div>
            </Link>
    )
    }

    return(
            <div className={styles.grid_image}>
                <NewImage
                    src={src}
                    height={height}
                    width={width}
                    alt={alt}
                />
                <Link href={href || '/shop'}>
                    <div className={styles.grid_image_button}>
                        Shop Now
                    </div>
                </Link>
            </div>
    )
}

export default GridImage;