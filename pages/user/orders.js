import Head from "next/head";
import Flow from "../../components/Misc/Flow"
import Form from "../../components/Misc/Form";
import OptInput from "../../components/Misc/OptInput";
import PageWrapper from "../../components/PageWrapper";
import PrimaryButton from '../../components/Loaders/PrimaryButton'
import Progress from "../../components/Loaders/Progress";
import Select from "../../components/Misc/Select";



const Orders =()=>{
    return(
        <PageWrapper>
            <Head>
                <title>Orders</title>
            </Head>
            <Select
                options={[1,2,3,4,5]}
                title={'Size'}
            />
        </PageWrapper>
    )
}

export default Orders;