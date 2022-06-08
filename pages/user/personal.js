import styles from '../../styles/form.module.css'


import { useState } from "react";
import {  useStore } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import {useRouter} from 'next/router'
import { firstLetterToUpperCase } from '../../services/other';


import Head from 'next/head'
import OptInput from '../../components/Misc/OptInput';
import DashBoard from "../../components/Authentication/DashBoard"
import withAuth from "../../components/Authentication/withAuth";
import SecondaryButton from "../../components/Loaders/SecondaryButton";
import ErrorPopUp from "../../components/Misc/ErrorPopUp";
import PrimarySpinner from '../../components/Loaders/PrimarySpinner';
import EmptyState from '../../components/Misc/EmptyState';


const Personal =()=>{
    const router = useRouter()
    const {userState} = useStore()
    const [user,setUser] = userState
    const [details,setDetails] = useState(user.details.personal)
    const [edit,setEdit] = useState(false)
    const {awaiting,saveDetails,err} = useForm({
        id:user._id,
        formType:'personal'
    })
    if(err){
        return(
         <ErrorPopUp>
             <h3>{err}</h3>
             <SecondaryButton
                text={"Try again"}
                action={()=>router.reload()}
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
                            <PrimarySpinner
                                size={'l'}
                            />
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
                                <p
                                    className="edit"
                                    onClick={()=>setEdit(!edit)}
                                >
                                        {edit?"X":"Edit"}
                                </p>
                            </div>
                            <>
                            {
                            Object.keys(user.details.personal).map((key,index)=>{
                                return(
                                    <OptInput
                                        maxWidth={'30rem'}
                                        type={key==='address'?'textarea':'text'}
                                        title={key}
                                        placeholder={firstLetterToUpperCase(key)}
                                        value={details[key]}
                                        array={details}
                                        action={setDetails}
                                        disabled={!edit}
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