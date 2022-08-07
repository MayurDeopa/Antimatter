import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import FunctionalModalForm from '../components/Misc/FunctionalModalForm'
import PageWrapper from '../components/PageWrapper';
import withAuth from '../components/Authentication/withAuth'
import Flow from '../components/Misc/Flow';

import useDetails from '../lib/drawer/customhooks/useDetails';
import { useEffect, useState } from 'react';
import { useStore } from '../lib/drawer/context/StoreContext';
import { sendDetails } from '../services/api/details';
import {useRouter} from 'next/router'
import { gateways } from '../lib/drawer/PaymentGateways';
import styles from '../styles/checkout.module.css'

import EmptyState from '../components/Misc/EmptyState'
import Progress from '../components/Loaders/Progress'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import OptInput from '../components/Misc/OptInput';
import LinkBtn from '../components/Misc/LinkBtn'
import { firstLetterToUpperCase } from '../services/other';
import CheckoutProduct from '../components/Cart/CheckoutProduct';
import { shippingValidator } from '../lib/drawer/validators';
import useModal from '../lib/drawer/customhooks/useModal'
import usePayment from '../lib/drawer/customhooks/usePayment';
import Head from 'next/head';
import Otp from '../components/Authentication/Otp';
import { commerce } from '../lib/drawer/commerce';


const Checkout =()=>{
    const router = useRouter()
    const {id} = router.query
    const {cartState,progressState} = useStore()
    const [cart,setCart] = cartState
    const [progress,setProgress] = progressState
    const {validInput,isPaying,paymentGateways,pay,data,setData,setInput,generateToken,checkoutData} = usePayment()
    const {open,toggleModal} = useModal()
    useEffect(()=>{
        if(!id)return;
        generateToken(id)
        
    },[router.isReady])
    if(!id){
        return(
            <EmptyState>
                <Form
                    title={'Invalid token'}
                    
                >
                    <MainContainer
                        justify={'center'}
                        maxWidth={'100%'}
                    >
                    <LinkBtn
                        url={'/cart'}
                        text='Go to cart'
                    />
                    <LinkBtn
                        url={'/shop'}
                        text='Start Shopping'
                    />
                    </MainContainer>
                </Form>
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
                    action={()=>pay(checkoutData.id,data)}
                >
                    <MainContainer
                        headerSide={'flex-start'}
                        customClasses={styles.small_container}
                        maxWidth={'100%'}
                        direction={'column'}
                        title={"Contact information"}
                    
                    >
                        <MainContainer
                        customClasses={styles.info_wrapper}
                        maxWidth={'100%'}
                    >
                        <MainContainer
                            direction={'row'}
                            align={'center'}     
                        >
                            <OptInput
                               placeholder={"First name"}   
                                action={(e)=>setInput('firstname',e.target.value)}
                                required={true}
                                title={'email'}
                                value={data.firstname}
                                isValid={data.firstname.length}
                                type={'text'}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                        >

                            <OptInput
                                placeholder={"Last name"}                               
                                action={(e)=>setInput('lastname',e.target.value)}
                                required={true}
                                title={'Last name'}
                                value={data.lastname}
                                isValid={data.lastname.length}
                            />
                        </MainContainer>
                    </MainContainer>
                    <MainContainer
                            direction={'row'}
                            align={'center'}
                            maxWidth={'100%'}
                        >
                            <OptInput
                                placeholder={"Email"}
                                action={(e)=>setInput('email',e.target.value)}
                                required={true}
                                title={'name'}
                                value={data.email}
                                isValid={data.email.length}
                                type={'email'}
                            />
                        </MainContainer>
                    </MainContainer>
                    
                    <MainContainer
                        headerSide={'flex-start'}
                        customClasses={styles.small_container}
                        maxWidth={'100%'}
                        direction={'column'}
                        title={"Shipping details"}
                    >
                        <MainContainer
                        maxWidth={'100%'}
                        customClasses={styles.info_wrapper}
                    >
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >
                            <OptInput
                                placeholder={"Name"}
                                action={(e)=>setInput('name',e.target.value)}
                                required={true}
                                title={'name'}
                                value={data.name}
                                isValid={data.name.length}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >
                            <OptInput
                                placeholder={"City"}
                                action={(e)=>setInput('town_city',e.target.value)}
                                required={true}
                                title={'town_city'}
                                value={data.town_city}
                                isValid={data.town_city.length}
                                errMsg={"Enter a valid pincode"}
                            />
                        </MainContainer>
                    </MainContainer>
                    <MainContainer
                        maxWidth={'100%'}
                        direction={'row'}
                        align={'center'}
                    >
                        <OptInput
                            maxWidth={'992px'}
                            placeholder={"Address"}
                            type={'textarea'}                            
                            action={(e)=>setInput('street',e.target.value)}
                            required={true}
                            title={'street'}
                            value={data.street}
                            isValid={data.street.length}
                        />
                    </MainContainer>
                    <MainContainer
                        customClasses={styles.info_wrapper}
                        maxWidth={'100%'}
                    >
                        <MainContainer
                            align={'center'}
                        >
                            <OptInput
                                placeholder={"State"}
                                action={(e)=>setInput('state',e.target.value)}
                                required={true}
                                title={'state'}
                                value={data.state}
                                isValid={data.state.length}
                                
                            />    
                        </MainContainer>
                        <MainContainer
                            align={'center'}
                        >
                            <OptInput
                                action={(e)=>setInput('country',e.target.value)}
                                required={true}
                                placeholder={'Country'}
                                title={'country'}
                                value={data.country}
                                isValid={data.country.length}
                            />    
                        </MainContainer>    
                        
                    </MainContainer>
                    
                    </MainContainer>
                    <MainContainer
                        headerSide={'flex-start'}
                        customClasses={styles.small_container}
                        maxWidth={'100%'}
                        direction={'column'}
                        title={"Payment methods"}
                    >
                        <MainContainer
                            customClasses={styles.info_wrapper}
                            maxWidth={'100%'}
                            width={'100%'}
                            justify={'flex-start'}
                            >
                                {paymentGateways.map((g,i)=>{
                                    return(
                                        <PrimaryButton
                                            text={g.name}
                                            icon={g.icon}
                                            awaitState={g.state}
                                            width={'100%'}
                                            cssClasses={g.cssClass}
                                            key={i}
                                            type='submit'
                                        />
                                    )
                                })}
                        </MainContainer>
                    </MainContainer>
                </Form>
                <div className={`${styles.checkout_form}`}>
                        <MainContainer
                            customClasses={styles.steps_header}
                            maxWidth={'100%'}
                            direction='column'
                        >
                            {
                                isPaying
                                ?
                                <PrimarySpinner/>
                                :
                                checkoutData.line_items.map((item,i)=>{
                                    return(
                                        <CheckoutProduct
                                            src={item.image.url}
                                            key={i}
                                            price={item.line_total.formatted_with_symbol}
                                            name={item.name}
                                        />
                                    )
                                })
                            }
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
                                <p>{!cart?'-':cart.subtotal.formatted_with_symbol}</p>
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
            </div>
            {
                open
                &&
                <Otp
                    hook={toggleModal}
                />
            }
            <Progress
                visible={isPaying}
            />
        </PageWrapper>
    )
}

export default Checkout;