
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
        <PageWrapper
            customClasses={styles.no_padding}
        >
            <Head>
                <title>Checkout</title>
            </Head>
            <div className={styles.container}>
                <Form
                    maxWidth={'50rem'}
                    customClasses={`${styles.small_container} ${styles.no_bg}`}
                    width={'100%'}
                    direction={'column'}
                    action={handleCheckoutCapture}
                >
                    <Container
                        className={styles.small_container}
                    
                    >
                        <h2 style={{marginBottom:'10px'}}>Personal Details</h2>
                        <Container
                        className={styles.info_wrapper}
                    >
                        <Container
                            direction={'row'}
                            align={'center'}     
                        >
                            <OptInput
                                
                               placeholder={"First name"}   
                                action={(e)=>setInput('firstname',e.target.value)}
                                required={true}
                                title={'email'}
                                value={data.firstname}
                                isValid
                                type={'text'}
                            />
                        </Container>
                        <Container
                        >

                            <OptInput
                                
                                placeholder={"Last name"}                               
                                action={(e)=>setInput('lastname',e.target.value)}
                                required={true}
                                title={'Last name'}
                                value={data.lastname}
                                isValid
                            />
                        </Container>
                    </Container>
                    <Container

                        >
                            <OptInput
                                
                                placeholder={"Email"}
                                action={(e)=>setInput('email',e.target.value)}
                                required={true}
                                title={'name'}
                                value={data.email}
                                isValid
                                type={'email'}
                            />
                        </Container>
                    </Container>
                    
                    <Container
                        className={styles.small_container}
                    >
                        <h2 style={{marginBottom:'10px'}}>Shipping Details</h2>
                        <Container
                        className={styles.info_wrapper}
                    >
                        <Container
                        >
                            <OptInput
                                
                                placeholder={"Name"}
                                action={(e)=>setInput('name',e.target.value)}
                                required={true}
                                title={'name'}
                                value={data.name}
                                isValid
                            />
                        </Container>
                        <Container
                        >
                            <OptInput
                                
                                placeholder={"City"}
                                action={(e)=>setInput('town_city',e.target.value)}
                                required={true}
                                title={'town_city'}
                                value={data.town_city}
                                isValid
                            />
                        </Container>
                    </Container>
                    <Container
                    >
                        <OptInput
                            
                            maxWidth={'992px'}
                            placeholder={"Address"}
                            type={'textarea'}                            
                            action={(e)=>setInput('street',e.target.value)}
                            required={true}
                            title={'street'}
                            value={data.street}
                            isValid
                        />
                    </Container>
                    <Container
                        className={styles.info_wrapper}       
                    >
                        <Container
                        >
                            <Select
                                
                                placeholder={"State"}
                                action={(e)=>setInput('state',e.target.value)}
                                required={true}
                                title={'state'}
                                value={data.state}
                                isValid
                                options={states}
                                height={'71px'}
                                
                            />    
                        </Container>
                            <Container
                            >
                                <Select
                                    
                                    action={(e)=>setInput('country',e.target.value)}
                                    required
                                    placeholder={'Country'}
                                    title={'country'}
                                    value={data.country}
                                    isValid
                                    options={countriesData}
                                    height={'71px'}
                                />    
                            </Container>    
                            
                        </Container>
                        <Container
                            styles={{display:'flex',justifyContent:'flex-end'}}
                        >
                            <Button
                                text={`Pay ${!checkoutData?'-':checkoutData.live.total_with_tax.formatted_with_symbol}`}
                                styles={{width:'10rem'}}
                                type={'submit'}
                                rippleTimeout={800}
                                rippleColor='white'
                                loading={isPaying}
                            />
                        </Container>
                    </Container>
                </Form>
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
                        </MainContainer>
                        <MainContainer
                            maxWidth={'100%'}
                            direction={'column'}
                            
                        >
                            <MainContainer
                                maxWidth={'100%'}
                                justify={'space-between'}
                            >
                                <p>Subtotal :</p>
                                <p>{!checkoutData?'-':checkoutData.live.total_with_tax.formatted_with_symbol}</p>
                            </MainContainer>
                            <MainContainer
                                maxWidth={'100%'}
                                justify={'space-between'}
                            >
                                <p>Delivery :</p>
                                <p>Free</p>
                            </MainContainer>
                            
                        </MainContainer>
                </div>
                {isPaying && (
                    <Modal>
                        <PrimarySpinner/>
                    </Modal>
                )}
            </div>
        </PageWrapper>
    )
}

export default Checkout;