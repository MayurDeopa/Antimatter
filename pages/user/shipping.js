import styles from '../../styles/form.module.css'


import { useState } from "react";
import { useContext } from "react";
import { Store } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import {useRouter} from 'next/router'
import { firstLetterToUpperCase } from '../../services/other';


import PrimaryButton from '../../components/Loaders/PrimaryButton'
import DashBoard from "../../components/Authentication/DashBoard"
import SecondaryButton from '../../components/Loaders/SecondaryButton'
import withAuth from "../../components/Authentication/withAuth";
import ErrorPopUp from '../../components/Misc/ErrorPopUp'
import Head from "next/head";
import EmptyState from '../../components/Misc/EmptyState';
import PrimarySpinner from '../../components/Loaders/PrimarySpinner';
import OptInput from '../../components/Misc/OptInput';
import MainContainer from '../../components/Misc/MainContainer';

const Shipping =()=>{
    const router = useRouter()
    const {userState} = useContext(Store)
    const [user] = userState
    const {awaiting,saveDetails,err} = useForm({
        id:user._id,
        formType:'shipping'
    })
    const [details,setDetails] = useState(user.details.shipping)
    const [edit,setEdit] = useState(false)
    const setInput =(key,value)=>{
        setDetails({...details,[key]:value})
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
                <title>Shipping</title>
            </Head>
                <DashBoard>
                    <form className={styles.form}>
                        <div
                            className={styles.header}>
                            <h2 className={styles.form_header}>
                                    Shipping Details
                            </h2>
                        </div>
                        <>
                        {
                            Object.keys(user.details.shipping).map((key,index)=>{
                                return(
                                    <OptInput
                                        type={key==='address'?'textarea':'text'}
                                        title={key}
                                        maxWidth={'30rem'}
                                        placeholder={firstLetterToUpperCase(key)}
                                        value={details[key]}
                                        action={(e)=>setInput(key,e.target.value)}
                                        required
                                        isValid
                                        disabled={!edit}
                                        key={index}
                                    />
                                )
                                
                                {/*return(
                                    <Input 
                                        value={{
                                            title:key,
                                            value:user.details.shipping[key]
                                        }}
                                        state={{
                                            editState:[edit,setEdit],
                                            form:[details,setDetails]
                                        }}
                                        key={index}
                                    />
                                    )*/}
                            })
                        }
                        </>
                        <section className={styles.section}>
                        <MainContainer>
                                <PrimaryButton
                                    text={'Save'}
                                    width={'6rem'}
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

export default withAuth(Shipping);