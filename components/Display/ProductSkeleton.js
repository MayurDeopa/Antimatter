import styles from '../../styles/Product.module.css'


import Skeleton from "../Loaders/Skeleton"
import Head from 'next/head'
import { Container } from 'material-gas-ui'

const ProductSkeleton =()=>{
    return(
        <>
                <Head>
                    <title>Loading...</title>
                </Head>  
                    <Container styles={{marginBottom:'10px'}}>
                    <Skeleton height={'2rem'} width={'10rem'}/>
                    </Container>
                    <div className={styles.skeleton_wrapper}>
                        <Skeleton
                            height={'35rem'}
                            width={'100%'}
                        />
                        <Container
                            styles={{
                                flexDirection:'column'
                            }}
                        >
                            <Skeleton height={'2rem'} width={'5rem'}/>
                            <Skeleton height={'7px'} width={"80%"}/>
                            <Skeleton height={'10px'} width={"8rem"}/>
                            <Skeleton height={'7px'} width={"72%"}/>
                            <Skeleton height={'7px'} width={"60%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Skeleton height={'7px'} width={"72%"}/>
                            <Skeleton height={'7px'} width={"60%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Skeleton height={'7px'} width={"72%"}/>
                            <Skeleton height={'7px'} width={"60%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Skeleton height={'7px'} width={"72%"}/>
                            <Skeleton height={'7px'} width={"60%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Container>
                                <Skeleton height={'2rem'} width={'5rem'}/>
                                <Skeleton height={'2rem'} width={'5rem'}/>
                                <Skeleton height={'2rem'} width={'5rem'}/>
                            </Container>
                            <Skeleton height={'7px'} width={"72%"}/>
                            <Skeleton height={'7px'} width={"60%"}/>
                            <Skeleton height={'7px'} width={"70%"}/>
                            <Container>
                                <Skeleton height={'2.5rem'} width={"100%"}/>
                                <Skeleton height={'2.5rem'} width={"100%"}/>
                                </Container>
                        </Container>
                    </div>         
            </>
    )
}

export default ProductSkeleton;