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


const Checkout =()=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const {personal,shipping} = user.details
    const {data,isSpinning,formAction,err,setData} = useDetails()
    const {validInput,isPaying,paymentGateways,pay} = usePayment(data)

    return(
        <PageWrapper
            customClasses={styles.no_padding}
        >
            <div className={styles.container}>
                <Form
                    maxWidth={'50rem'}
                    customClasses={`${styles.small_container} ${styles.no_bg}`}
                    width={'100%'}
                    direction={'column'}
                >
                    <Form
                    headerSide={'flex-start'}
                    customClasses={styles.small_container}
                    width={'100%'}
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
                                
                                action={setData}
                                array={data}
                                required={true}
                                title={'email'}
                                value={data.email}
                                isValid={validInput.email}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >

                            <OptInput
                                placeholder={"Phone Number"}
                                
                                action={setData}
                                array={data}
                                required={true}
                                title={'phone'}
                                value={data.phone}
                                isValid={validInput.phone}
                            />
                        </MainContainer>
                    </MainContainer>
                    </Form>
                    
                    <Form
                        headerSide={'flex-start'}
                        customClasses={styles.small_container}
                        width={'100%'}
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
                                
                                action={setData}
                                array={data}
                                required={true}
                                title={'name'}
                                value={data.name}
                                isValid={validInput.name}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >
                            <OptInput
                                placeholder={"Pincode"}
                                
                                action={setData}
                                array={data}
                                required={true}
                                title={'pincode'}
                                value={data.pincode}
                                isValid={validInput.pincode}
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
                            
                            action={setData}
                            array={data}
                            required={true}
                            title={'address'}
                            value={data.address}
                            isValid={validInput.address}
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
                                action={setData}
                                array={data}
                                required={true}
                                placeholder={'City'}
                                title={'city'}
                                value={data.city}
                                isValid={validInput.city}
                            />    
                        </MainContainer>    
                        <MainContainer
                            align={'center'}
                        >
                            <OptInput
                                placeholder={"State"}
                                action={setData}
                                array={data}
                                required={true}
                                title={'state'}
                                value={data.state}
                                isValid={validInput.state}
                            />    
                        </MainContainer>
                    </MainContainer>
                    {/*<MainContainer
                        maxWidth={'100%'}
                        width={'100%'}
                        justify={'flex-start'}
                    >
                        <SecondaryButton
                            text={edit?'Edit':'Cancel'}
                            width={'7rem'}
                            action={edit?()=>setEdit(!edit):cancelEdit}
                        />
                        <PrimaryButton
                            width={'7rem'}
                            text={'Save'}
                            action={saveForm}
                            awaitState={edit?'disabled':'none'}
                        />
                        </MainContainer>*/}
                    </Form>
                    <Form
                        headerSide={'flex-start'}
                        customClasses={styles.small_container}
                        width={'100%'}
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
                                            action={()=>pay(g)}
                                            key={i}
                                        />
                                    )
                                })}
                        </MainContainer>
                    </Form>
                </Form>
                <div className={`${styles.checkout_form}`}>
                        <MainContainer
                            customClasses={styles.steps_header}
                            maxWidth={'100%'}
                            direction='column'
                        >
                        {user.cart.map((c,i)=>{
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
                                <p>-</p>
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
                isSpinning
                &&
                <ModalSpinner/>
            }
        </PageWrapper>
    )
}

export default withAuth(Checkout);