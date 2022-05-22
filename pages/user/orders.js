import Flow from "../../components/Misc/Flow"
import PageWrapper from "../../components/PageWrapper";



const Orders =()=>{
    return(
        <PageWrapper>
            <Flow
            buttonValue={'Submit'}
            titles={["Personal details","Shipping details"]}
            breakpoints={[3]}
            children={{
                Name:"",
                Email:"",
                Phone:"",
                Pincode:"",
                Address:"",
                City:"",
                State:"",
            }}
        >

        </Flow>
        </PageWrapper>
    )
}

export default Orders;