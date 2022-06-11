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


import SecondaryButton from '../components/Loaders/SecondaryButton'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import ErrorPopUp from '../components/Misc/ErrorPopUp';
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import FormSection from '../components/Misc/FormSection';
import OptInput from '../components/Misc/OptInput';
import ModalSpinner from '../components/Loaders/ModalSpinner';
import { firstLetterToUpperCase } from '../services/other';


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
        <PageWrapper>
            <div className={styles.container}>
                <Form
                    customClasses={styles.small_container}
                    width={'100%'}
                    direction={'column'}
                    title={"Delivery address"}
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
                    <MainContainer
                        maxWidth={'100%'}
                        customClasses={styles.info_wrapper}
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
                    title={'Pay using'}
                    customClasses={styles.checkout_form}
                    >
                    {paymentGateways.map((g,i)=>{
                        let fun = g.action
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
                </Form>
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

{/*
<Flow
                buttonValue={'Submit'}
                titles={["Personal details","Shipping details"]}
                breakpoints={[3]}
                action={formAction}
                loadingState={spinning}
                hook={()=>setIsLoading(!isLoading)}
                components={{
                    name:personal.name,
                    email:personal.email,
                    phone:personal.phone,
                    pincode:shipping.pincode,
                    address:shipping.address,
                    city:shipping.city,
                    state:shipping.state,
                }}
                state={[
                    {
                        title:'Name',
                        state:'name',
                        isValid:true,
                        type:'text'
                    },
                    {
                        title:'Email',
                        state:'email',
                        isValid:true,
                        type:'email'
                    },
                    {
                        title:'Phone',
                        state:'phone',
                        isValid:true,
                        type:'tel'
                    },
                    {
                        title:'Pincode',
                        state:'pincode',
                        isValid:true,
                        type:'text'
                    },
                    {
                        title:'Address',
                        state:'address',
                        isValid:true,
                        type:'textarea'
                    },
                    {
                        title:'City',
                        state:'city',
                        isValid:true,
                        type:'text'
                    },
                    {
                        title:'State',
                        state:'state',
                        isValid:true,
                        type:'text'
                    }
                ]}
            >

        </Flow>

            */}