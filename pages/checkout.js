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
import Toast from '../components/Misc/Toast';
import Message from '../components/basic/Message';
import ErrorPopUp from '../components/Misc/ErrorPopUp';


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
            setErr({
                type:'failed',
                message:res.message
            })
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
            <Flow
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

        </Flow>
        {
            err
            &&
            <ErrorPopUp>
                <p>{err.message}</p>
            </ErrorPopUp>
        }
        </PageWrapper>
    )
}

export default withAuth(Checkout);