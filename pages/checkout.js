

import { useEffect } from 'react';
import styles from '../styles/checkout.module.css'
import { FiArrowLeft} from 'react-icons/fi'


import EmptyState from '../components/Misc/EmptyState'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import OptInput from '../components/Misc/OptInput';
import LinkBtn from '../components/Misc/LinkBtn'
import CheckoutProduct from '../components/Cart/CheckoutProduct';

import usePayment from '../lib/drawer/customhooks/usePayment'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button,Container ,Modal} from 'material-gas-ui';
import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import CheckoutForm from '../components/Cart/CheckoutForm';
import CheckoutSkeleton from '../components/Cart/CheckoutSkeleton';
import Skeleton from '../components/Loaders/Skeleton';
import ThankYou from '../components/Display/ThankYou';



const Checkout =()=>{
    const router = useRouter()
    const {id} = router.query
    const {isPaying,data,setInput,generateToken,checkoutData,fetchCountries,countriesData,fetchStates,states,handleCheckoutCapture,err,isFetching,handlePayment,applyDiscount,applyingDiscount,isOrderSucessfull} = usePayment()
    useEffect(()=>{
        if(!id)return;
        generateToken(id)
        
    },[router.isReady])

    useEffect(()=>{
        if(checkoutData) fetchCountries(checkoutData.id)
    },[checkoutData])

    useEffect(()=>{
        if(data.country) fetchStates(checkoutData.id,data.country)
    },[data.country])

    
    if(!id){
        return(
            <EmptyState>
               <Container styles={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                height:'30rem'
               }}>
               
                    <>
                        <h4 style={{color:'white'}}>Invalid token</h4>
                        <LinkBtn
                            width={'8rem'}
                            text={'Shop'}
                            url='/'
                        />
                    </>
               
               </Container>
            </EmptyState>
        )
    }

    if(isFetching){
        return(
            <div className={styles.skeleton_container}>
                <Head>
                    <title>Loading...</title>
                </Head>
                <CheckoutSkeleton/>
                <Skeleton
                    height={'50rem'}
                    width={'30rem'}
                />
            </div>
        )
    }

    if(isOrderSucessfull){
        return <ThankYou/>
    }

    return(
        
            <div className={styles.container}>
                <Head>
                    <title>Checkout</title>
                </Head>
                <div className={`${styles.checkout_form}`}>
                        <MainContainer
                            customClasses={styles.steps_header}
                            maxWidth={'100%'}
                            direction='column'
                        >
                            <Button 
                                variant='secondary' 
                                text='Shop' 
                                icon={<FiArrowLeft/>} 
                                action={()=>router.push('/')}
                                styles={{backgroundColor:'var(--secondary-theme-lighter)',color:'white'}}
                                rippleColor='white'    
                            />
                            {checkoutData?.live.line_items.map((item,i)=>{
                                return(
                                    <CheckoutProduct
                                        key={i}
                                        src={item.image.url}
                                        price={item.price.formatted_with_symbol}
                                        quantity={item.quantity}
                                        name={item.name}
                                        options={item.selected_options}
                                    />
                                )
                            })}
                            <Form customClasses={styles.discount_form} action={applyDiscount}>
                                <OptInput
                                    required
                                    placeholder={'Discount code'}
                                    value={data.discount}
                                    action={(e)=>setInput('discount',e.target.value)}
                                    disabled={applyingDiscount}
                                />
                                <Button 
                                    type='submit' 
                                    variant='secondary' 
                                    styles={{backgroundColor:'var(--secondary-theme-lighter)',color:'white'}}
                                    text={!applyingDiscount&&'Apply'}
                                    loading={applyingDiscount}
                                    rippleColor='white'
                                    />
                            </Form>
                             <Container
                                styles={{flexDirection:'column'}}
                                    
                                >
                                <Container
                                    className={styles.confirm_price}
                                >
                                    <p>Subtotal </p>
                                    <p>{!checkoutData?'-':checkoutData.live.total_with_tax.formatted_with_symbol}</p>
                                </Container>
                                <Container
                                    className={styles.confirm_price}
                                >
                                    <p>Delivery </p>
                                    <p>Free</p>
                                </Container>
                                {
                                    checkoutData.code
                                    &&
                                        <Container
                                            className={styles.discount_price}
                                        >
                                            <p>{checkoutData.code}</p>
                                            <p> - {checkoutData.discount.amount_saved.formatted_with_symbol}</p>
                                        </Container>
                                }
                                <Container
                                    className={styles.confirm_price}
                                >
                                    <p>Total </p>
                                    <p>{checkoutData.live.total_with_tax.formatted_with_symbol}</p>
                                </Container>
                                
                            </Container>
                        </MainContainer>
                        
                </div>
                <CheckoutForm
                    handleCheckout={()=>handlePayment(checkoutData.live.total_with_tax.raw)}
                    data={data}
                    states={states}
                    countriesData={countriesData}
                    checkoutToken = {checkoutData}
                    isPaying={isPaying}
                    handleInput = {setInput}
                />
                
                
            </div>
    )
}

export default Checkout;