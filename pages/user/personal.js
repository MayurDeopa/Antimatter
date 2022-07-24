import styles from '../../styles/form.module.css'


import { useState } from "react";
import {  useStore } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import {useRouter} from 'next/router'
import { firstLetterToUpperCase } from '../../services/other';


import Head from 'next/head'
import OptInput from '../../components/Misc/OptInput';
import PrimaryButton from '../../components/Loaders/PrimaryButton'
import DashBoard from "../../components/Authentication/DashBoard"
import withAuth from "../../components/Authentication/withAuth";
import SecondaryButton from "../../components/Loaders/SecondaryButton";
import ErrorPopUp from "../../components/Misc/ErrorPopUp";
import PrimarySpinner from '../../components/Loaders/PrimarySpinner';
import EmptyState from '../../components/Misc/EmptyState';
import MainContainer from '../../components/Misc/MainContainer';
import BasicProgress from '../../components/Loaders/BasicProgress';


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
    const setInput =(key,value)=>{
        setDetails({...details,[key]:value})
    }
    const save =(data)=>{
        setEdit(false)
        saveDetails(data)
    }
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
    else{
        return (
            <>
                <Head>
                    <title>Personal</title>
                </Head>
                    <DashBoard>
                        <form className={styles.form}>
                            <div className={styles.header}>
                                <h2 className={styles.form_header}>
                                    Personal Details
                                </h2>
                            </div>
                            
                                
                            <BasicProgress visible={awaiting}/>
                            
                            <>
                            {
                            Object.keys(user.details.personal).map((key,index)=>{
                                return(
                                    <OptInput
                                        maxWidth={'30rem'}
                                        title={key}
                                        placeholder={firstLetterToUpperCase(key)}
                                        value={details[key]}
                                        action={(e)=>setInput(key,e.target.value)}
                                        disabled={!edit}
                                        required
                                        isValid
                                        key={index}
                                    />
                                )
                            })
                        }
                            </>
                                <section className={styles.section}>
                                <MainContainer>
                                <PrimaryButton
                                    text={'Save'}
                                    width={'6rem'}
                                    action={()=>save(details)}
                                    awaitState={edit?'none':'disabled'}
                                />
                                <SecondaryButton
                                    text={edit?'Cancel':'Edit'}
                                    awaitState={'none'}
                                    width={'6rem'}
                                    action={()=>setEdit(!edit)}
                                />
                                </MainContainer>
                                </section>
                        </form>
                    </DashBoard>
            </>
        )
    }
}

export default withAuth(Personal);