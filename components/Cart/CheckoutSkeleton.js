import Skeleton from '../Loaders/Skeleton'
import MainContainer from "../Misc/MainContainer";
import { Container } from 'material-gas-ui';

import styles from '../../styles/checkout.module.css'

const CheckoutSkeleton =()=>{
    return(
        <div className={`${styles.checkout_form}`}>
            <MainContainer
            customClasses={styles.steps_header}
            maxWidth={'100%'}
            direction='column'
        >
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
                        </MainContainer>   
                        <Container
                        styles={{flexDirection:'column'}}
                            
                        >
                            <Container
                                className={styles.confirm_price}
                            >
                                <Skeleton height={'7px'} width={'5rem'}/>
                                <Skeleton height={'7px'} width={'5rem'}/>
                            </Container>
                            <Container
                                 className={styles.confirm_price}
                            >
                                <Skeleton height={'7px'} width={'6rem'}/>
                                <Skeleton height={'7px'} width={'2rem'}/>
                            </Container>
                            <Container
                                 className={styles.confirm_price}
                            >
                               <Skeleton height={'7px'} width={'4rem'}/>
                               <Skeleton height={'7px'} width={'6rem'}/>
                            </Container>
                            
                        </Container>
                             
                </div>
    
    )
}

export default CheckoutSkeleton;


