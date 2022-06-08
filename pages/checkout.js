import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import FunctionalModalForm from '../components/Misc/FunctionalModalForm'
import PageWrapper from '../components/PageWrapper';
import withAuth from '../components/Authentication/withAuth'
import Flow from '../components/Misc/Flow';

import { useEffect } from 'react';
import { useState } from 'react';
import { useStore } from '../lib/drawer/context/StoreContext';
import { sendDetails } from '../services/api/details';
import {useRouter} from 'next/router'
import styles from '../styles/checkout.module.css'

import SecondaryButton from '../components/Loaders/SecondaryButton'
import PrimaryButton from '../components/Loaders/PrimaryButton'
import ErrorPopUp from '../components/Misc/ErrorPopUp';
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import FormSection from '../components/Misc/FormSection';
import OptInput from '../components/Misc/OptInput';


const Checkout =()=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const [spinning,setSpinning] = useState(false)
    const {personal,shipping} = user.details
    const [err,setErr] = useState()
    const formAction = async(data)=>{
        setErr()
        setSpinning(true)
        try{
            const res = await sendDetails(data)
            if(res.status==='ok'){
                setUser({
                    ...user,
                    personal:res.details.personal,
                    shipping:res.details.shipping
                })
                setIsLoading(false)
            }
            else{
                setErr({
                    type:'failed',
                    message:res.message
                })
            }
        }catch(error){
            setErr({
                type:'failed',
                message:error
            })
        }
        setSpinning(false)
    }
    return(
        <PageWrapper>
            {
                isLoading
                &&
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
            }
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
                                disabled
                                title={'Name'}
                                value={user.details.personal.name}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >

                            <OptInput
                                disabled
                                title={'Phone'}
                                value={user.details.personal.phone}
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
                                disabled
                                title={'Email'}
                                value={user.details.personal.email}
                            />
                        </MainContainer>
                        <MainContainer
                            direction={'row'}
                            align={'center'}
                        >
                            <OptInput
                                disabled
                                title={'Pincode'}
                                value={user.details.shipping.pincode}
                            />
                        </MainContainer>
                    </MainContainer>
                    <MainContainer
                        maxWidth={'100%'}
                        direction={'row'}
                        align={'center'}
                    >
                        <OptInput
                            type={'textarea'}
                            disabled
                            title={'Address'}
                            value={user.details.shipping.address}
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
                                disabled
                                placeholder={'City'}
                                title={'City'}
                                value={user.details.shipping.city}
                            />    
                        </MainContainer>    
                        <MainContainer
                            align={'center'}
                        >
                            <OptInput
                                disabled
                                title={'State'}
                                value={user.details.shipping.state}
                            />    
                        </MainContainer>
                    </MainContainer>
                    <MainContainer
                        maxWidth={'100%'}
                        width={'100%'}
                        justify={'flex-end'}
                    >
                        <SecondaryButton
                            text={'Edit'}
                            width={'10rem'}
                            action={()=>setIsLoading(true)}
                        />
                        <PrimaryButton
                            width={'15rem'}
                            text={'Deliver here'}
                        />
                    </MainContainer>
                </Form>
                <Form
                    title={'Something'}
                    maxWidth={'30%'}
                    customClasses={styles.checkout_form}
                    >
                    <FormSection>
                        <OptInput
                            type={'text'}
                            placeholder={'Something...'}
                        />
                    </FormSection>
                    <PrimaryButton
                    text={'Checkout'}
                    awaitState='disabled'
                    width={'100%'}
                />
                </Form>
            </div>
            
        </PageWrapper>
    )
}

export default withAuth(Checkout);