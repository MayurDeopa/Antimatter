import Skeleton from '../Loaders/Skeleton'
import MainContainer from "../Misc/MainContainer";

import styles from '../../styles/checkout.module.css'

const CheckoutSkeleton =()=>{
    return(
        <MainContainer
        maxWidth={'100%'}
        customClasses={styles.product }
    >
        <MainContainer
            maxWidth={'100%'}
        >
        <Skeleton
            height={'7rem'}
            width={'7rem'}
        />
        <MainContainer
            width={'7rem'}
            direction={'column'}
        >
            <Skeleton width={'8rem'} height={'7px'}/>
            <Skeleton width={'5rem'} height={'7px'}/>
            <Skeleton width={'3rem'} height={'7px'}/>
            <Skeleton width={'4rem'} height={'7px'}/>
            
        </MainContainer>
        </MainContainer>
        <MainContainer
            width={'70%'}
            justify={'flex-end'}
        >
            <Skeleton width={'5rem'} height={'7px'}/>
        </MainContainer>
    </MainContainer>
    )
}

export default CheckoutSkeleton;