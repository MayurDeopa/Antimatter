import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import FunctionalModalForm from '../components/Misc/FunctionalModalForm'
import PageWrapper from '../components/PageWrapper';
import withAuth from '../components/Authentication/withAuth'
import Flow from '../components/Misc/Flow';

import useDetails from '../lib/drawer/customhooks/useDetails';
import { useState } from 'react';
import { useStore } from '../lib/drawer/context/StoreContext';
import { sendDetails } from '../services/api/details';
import {useRouter} from 'next/router'
import { gateways } from '../lib/drawer/PaymentGateways';
import styles from '../styles/checkout.module.css'

import Image from 'next/image'
import SecondaryButton from '../components/Loaders/SecondaryButton'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import ErrorPopUp from '../components/Misc/ErrorPopUp';
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import FormSection from '../components/Misc/FormSection';
import OptInput from '../components/Misc/OptInput';
import ModalSpinner from '../components/Loaders/ModalSpinner';
import { firstLetterToUpperCase } from '../services/other';
import CheckoutProduct from '../components/Cart/CheckoutProduct';
import { shippingValidator } from '../lib/drawer/validators';
import usePayment from '../lib/drawer/customhooks/usePayment';
import Head from 'next/head';


const Checkout =()=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const {validInput,isPaying,paymentGateways,pay,data,setData,setInput} = usePayment()
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
                    action={()=>console.log('some')}
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
                               placeholder={"Email"}   
                                action={(e)=>setInput('email',e.target.value)}
                                required={true}
                                title={'email'}
                                value={data.email}
                                isValid={data.email.length}
                                errMsg={"Enter a valid email"}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >

                            <OptInput
                                placeholder={"Phone Number"}                               
                                action={(e)=>setInput('phone',e.target.value)}
                                required={true}
                                title={'phone'}
                                value={data.phone}
                                isValid={data.phone.toString().length}
                                errMsg={"Enter a valid phone number"}
                            />
                        </MainContainer>
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
                                placeholder={"Pincode"}
                                action={(e)=>setInput('pincode',e.target.value)}
                                required={true}
                                title={'pincode'}
                                value={data.pincode}
                                isValid={data.pincode.toString().length}
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
                            action={(e)=>setInput('address',e.target.value)}
                            required={true}
                            title={'address'}
                            value={data.address}
                            isValid={data.address.length}
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
                                action={(e)=>setInput('city',e.target.value)}
                                required={true}
                                placeholder={'City'}
                                title={'city'}
                                value={data.city}
                                isValid={data.city.length}
                            />    
                        </MainContainer>    
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
                                            action={()=>pay(g,data)}
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
                        {user.cart.items.map((c,i)=>{
                            return(
                                <CheckoutProduct
                                    src={c.img}
                                    name={c.name}
                                    price={c.price}
                                    quantity={c.quantity}
                                    key={i}
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
                                <p>{user.cart.amount}</p>
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
        </PageWrapper>
    )
}

export default withAuth(Checkout);