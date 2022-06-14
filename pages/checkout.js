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


const Checkout =()=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const {personal,shipping} = user.details
    const [paymentGateways,setPaymentGateways] = useState(gateways)
    const [edit,setEdit] = useState(true)
   const {data,isSpinning,formAction,err,setData} = useDetails()
   const cancelEdit =()=>{
       setData({...user.details.personal,...user.details.shipping})
       setEdit(true)
    }
    const saveForm =()=>{
        setEdit(true)
        formAction(data)

    }

    const pay =async(p)=>{
        const action = p.action
        setPaymentGateways(paymentGateways.map((g,i)=>g.name===p.name?{...g,state:'loading'}:{...g,state:'disabled'}))
        await action({
            amount:20000
        })
        setPaymentGateways(gateways)
    }

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
                                disabled ={edit}
                                action={setData}
                                array={data}
                                required={true}
                                title={'email'}
                                value={data.email}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >

                            <OptInput
                                placeholder={"Phone Number"}
                                disabled ={edit}
                                action={setData}
                                array={data}
                                required={true}
                                title={'phone'}
                                value={data.phone}
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
                                disabled ={edit}
                                action={setData}
                                array={data}
                                required={true}
                                title={'name'}
                                value={data.name}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >
                            <OptInput
                                placeholder={"Pincode"}
                                disabled ={edit}
                                action={setData}
                                array={data}
                                required={true}
                                title={'pincode'}
                                value={data.pincode}
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
                            disabled ={edit}
                            action={setData}
                            array={data}
                            required={true}
                            title={'address'}
                            value={data.address}
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
                                disabled={edit}
                                placeholder={'City'}
                                title={'city'}
                                value={data.city}
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
                                disabled={edit}
                                title={'state'}
                                value={data.state}
                            />    
                        </MainContainer>
                    </MainContainer>
                    <MainContainer
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
                    </MainContainer>
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