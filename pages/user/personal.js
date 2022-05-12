import styles from '../../styles/form.module.css'


import { useState } from "react";
import {  useStore } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import {useRouter} from 'next/router'


import Head from 'next/head'
import Input from '../../components/Authentication/Input';
import DashBoard from "../../components/Authentication/DashBoard"
import withAuth from "../../components/Authentication/withAuth";
import AwaitButton from "../../components/Loaders/AwaitButton";
import ErrorPopUp from "../../components/Misc/ErrorPopUp";
import PrimarySpinner from '../../components/Loaders/PrimarySpinner';
import EmptyState from '../../components/Misc/EmptyState';


const Personal =()=>{
    const router = useRouter()
    const {userState} = useStore()
    const [user,setUser] = userState
    const [details,setDetails] = useState({
        name:'',
        email:'',
        'phone number':''
    })
    const [edit,setEdit] = useState(false)
    const {awaiting,saveDetails,err} = useForm({
        id:user?.id,
        formType:'personal'
    })
    if(err){
        return(
         <ErrorPopUp>
             <h3>{err}</h3>
             <AwaitButton
                 states={{
                     text:"Try again",
                     action:()=>router.reload()
                 }}
             />
         </ErrorPopUp>
        )
    }
    else if(awaiting){
        return (
            <>
                <Head>
                    <title>Loading...</title>
                </Head>
                    <DashBoard>
                        <EmptyState>
                            <PrimarySpinner/>
                        </EmptyState>
                    </DashBoard>
            </>
        )
    }
    else{
        return (
            <>
                <Head>
                    <title>Personal</title>
                </Head>
                    <DashBoard>
                        <form className={styles.form}>
                            <div className={styles.header}>
                                <h2>
                                    Personal Details
                                </h2>
                                <h3
                                    className="edit"
                                    onClick={()=>setEdit(!edit)}
                                >
                                        {edit?"X":"Edit"}
                                </h3>
                            </div>
                            <>
                                {
                                    Object.keys(user.details.personal).map((key,index)=>{
                                        return(
                                            <Input 
                                                value={{
                                                    title:key,
                                                    value:user.details.personal[key]
                                                }}
                                                state={{
                                                    editState:[edit,setEdit],
                                                    form:[details,setDetails]
                                                }}
                                                key={index}
                                            />
                                        )
                                    })
                                }
                            </>
                                <section className={styles.section}>
                                {
                                    edit
                                    ?
                                    <input 
                                    className="save"
                                    value={'Save'}
                                    type='button'
                                    style={{
                                        width:'5rem'
                                    }}
                                    onClick={()=>console.log(details)}
                                    />
                                    :
                                    <input 
                                    className="await_save"
                                    value={'Save'}
                                    type='button'
                                    style={{
                                        width:'5rem'
                                    }}
                                    />
                                }
                                </section>
                        </form>
                    </DashBoard>
            </>
        )
    }
}

export default withAuth(Personal);