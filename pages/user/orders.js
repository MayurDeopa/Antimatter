import Head from "next/head";
import Flow from "../../components/Misc/Flow"
import Form from "../../components/Misc/Form";
import OptInput from "../../components/Misc/OptInput";
import PageWrapper from "../../components/PageWrapper";
import PrimaryButton from '../../components/Loaders/PrimaryButton'
import Progress from "../../components/Loaders/Progress";



const Orders =()=>{
    return(
        <PageWrapper>
            <Head>
                <title>Orders</title>
            </Head>
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
                    type:'text'
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

export default Orders;