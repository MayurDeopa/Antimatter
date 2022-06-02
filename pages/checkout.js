import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import FunctionalModalForm from '../components/Misc/FunctionalModalForm'
import PageWrapper from '../components/PageWrapper';
import withAuth from '../components/Authentication/withAuth'
import Flow from '../components/Misc/Flow';

import { useEffect } from 'react';
import { useState } from 'react';


const Checkout =()=>{
    const [isLoading,setIsLoading] = useState(true)
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
            components={{
                name:"",
                email:"",
                phone:"",
                pincode:"",
                address:"",
                city:"",
                state:"",
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
                    type:'text'
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
        </PageWrapper>
    )
}

export default withAuth(Checkout);