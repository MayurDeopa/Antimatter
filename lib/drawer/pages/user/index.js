import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import DashBoard from "../../../../components/Authentication/DashBoard";
import Login from "../../../../components/Authentication/Login";
import PageWrapper from "../../../../components/PageWrapper";
import { Store } from "../../context/StoreContext";

const User =({ Component, pageProps })=>{
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    return (
        <>
            <Head >
                <title>User</title>
            </Head>
                {
                    user
                    ?
                    <DashBoard/>
                    :
                    <Login/>
                }
        </>
    )
}

export default User;