import Flow from "../../components/Misc/Flow"
import PageWrapper from "../../components/PageWrapper";



const Orders =()=>{
    return(
        <PageWrapper>
            <Flow
            buttonValue={'Submit'}
            titles={["Personal details","Shipping details"]}
            breakpoints={[3]}
            components={{
                name:"gdsg",
                email:"hbsdh",
                phone:"hdf",
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