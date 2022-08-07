import Head from "next/head";
import Flow from "../../components/Misc/Flow"
import Form from "../../components/Misc/Form";
import OptInput from "../../components/Misc/OptInput";
import PageWrapper from "../../components/PageWrapper";
import PrimaryButton from '../../components/Loaders/PrimaryButton'
import Progress from "../../components/Loaders/Progress";
import Select from "../../components/Misc/Select";


import {loginUser} from '../../services/api/user.authentication'


const Orders =()=>{
    return(
        <PageWrapper>
            <Head>
                <title>Orders</title>
            </Head>
            <PrimaryButton
                text={'Login'}
                action={loginUser}
            />
        </PageWrapper>
    )
}

export default Orders;