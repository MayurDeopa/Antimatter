
import Image from "next/image"

import styles from '../../styles/checkout.module.css'
import MainContainer from "../Misc/MainContainer";
const CheckoutProduct =({src,price,quantity,name,options})=>{
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
                width={'7rem'}
                direction={'column'}
            >
                <p style={{fontSize:'16px',fontWeight:'bolder'}}>{name}</p>
                <p style={{fontSize:'14px'}}>Quantity : {quantity}</p>
                {options.map((o,i)=>{
                    return<p style={{fontSize:'14px'}} key={i}>{o.group_name} : {o.option_name}</p>
                })}
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