
import Image from "next/image"

import styles from '../../styles/checkout.module.css'
import MainContainer from "../Misc/MainContainer";
const CheckoutProduct =({src,price,quantity,name})=>{
    return(
        <MainContainer
            maxWidth={'100%'}
            customClasses={styles.product }
        >
            <MainContainer
                maxWidth={'100%'}
            >
            <Image
                src={src}
                width={100}
                height={100}
            />
            <MainContainer
                width={'6rem'}
            >
                <p>{name}</p>
            </MainContainer>
            </MainContainer>
            <MainContainer
                width={'70%'}
                justify={'flex-end'}
            >
                <p>{price}</p>
            </MainContainer>
        </MainContainer>
    )
}

export default CheckoutProduct;