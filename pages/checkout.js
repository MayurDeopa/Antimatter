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
    const [isLoading,setIsLoading] = useState(true)
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
                router.replace('/user/personal')
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
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
    },[])
    if(isLoading){
        return(
            <PageWrapper>
                <FunctionalModalForm
                title={'Loading...'}
            >
                <PrimarySpinner/>
            </FunctionalModalForm>
            </PageWrapper>
        )
    }
    return(
        <PageWrapper>
            <div className={styles.container}>
                <MainContainer
                    customClasses={styles.small_container}
                    width={'100%'}
                    maxWidth={'65%'}
                    direction={'column'}
                >
                    <h3 className={styles.steps_header}>Delivery address</h3>
                    <MainContainer
                        customClasses={styles.info_wrapper}
                        align={'center'}
                        maxWidth={'100%'}
                        direction={'row'}
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
                        direction={'row'}
                        align={'center'}
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
                        direction={'row'}
                        align={'center'}
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
                </MainContainer>
            <Form
                    title={'Something'}
                    maxWidth={'35%'}
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
            {/*<Flow
            buttonValue={'Submit'}
            titles={["Personal details","Shipping details"]}
            breakpoints={[3]}
            action={formAction}
            loadingState={spinning}
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

        </Flow>*/}
            
        </PageWrapper>
    )
}

export default withAuth(Checkout);