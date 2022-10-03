
import PageWrapper from '../components/PageWrapper';

import { useEffect, useState } from 'react';
import styles from '../styles/checkout.module.css'

import EmptyState from '../components/Misc/EmptyState'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import OptInput from '../components/Misc/OptInput';
import LinkBtn from '../components/Misc/LinkBtn'
import CheckoutProduct from '../components/Cart/CheckoutProduct';
import Select from '../components/Misc/Select'

import usePayment from '../lib/drawer/customhooks/usePayment'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button,Container ,Modal} from 'material-gas-ui';
import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import CheckoutForm from '../components/Cart/CheckoutForm';



const Checkout =()=>{
    const router = useRouter()
    const {id} = router.query
    const {isPaying,data,setInput,generateToken,checkoutData,fetchCountries,countriesData,fetchStates,states,handleCheckoutCapture,err,isFetching} = usePayment()
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


    if(err){
        return(
            <EmptyState>
               <Container styles={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                height:'30rem'
               }}>
               {
                    isFetching
                    ?
                    <PrimarySpinner/>
                    :
                    <>
                        <h4 style={{color:'white'}}>Something went wrong</h4>
                        <LinkBtn
                            width={'8rem'}
                            text={'Shop'}
                            url='/'
                        />
                    </>
               }
               </Container>
            </EmptyState>
        )
    }


    if(isFetching){
        return(
            <EmptyState>
               <Container styles={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                height:'30rem'
               }}>
               
                    <PrimarySpinner/>
                    
               </Container>
            </EmptyState>
        )
    }



    return(
        
            <div className={styles.container}>
                <div className={`${styles.checkout_form}`}>
                        <MainContainer
                            customClasses={styles.steps_header}
                            maxWidth={'100%'}
                            direction='column'
                        >
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
                    handleCheckout={handleCheckoutCapture}
                    data={data}
                    states={states}
                    countriesData={countriesData}
                    checkoutToken = {checkoutData}
                    isPaying={isPaying}
                    handleInput = {setInput}
                />
                
                
                {isPaying && (
                    <Modal>
                        <PrimarySpinner/>
                    </Modal>
                )}
            </div>
    )
}

export default Checkout;