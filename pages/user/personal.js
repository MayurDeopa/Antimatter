import styles from '../../styles/form.module.css'


import { useState } from "react";
import { Store, useStore } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import {useRouter} from 'next/router'


import Head from 'next/head'
import Input from '../../components/Authentication/Input';
import DashBoard from "../../components/Authentication/DashBoard"
import PageWrapper from "../../components/PageWrapper";
import withAuth from "../../components/Authentication/withAuth";
import Skeleton from "../../components/Loaders/Skeleton";
import AwaitButton from "../../components/Loaders/AwaitButton";
import ErrorPopUp from "../../components/Misc/ErrorPopUp";


const Personal =()=>{
    const sample = [1,2,3]
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
    if(awaiting){
        return (
            <div className="page">
                <Head>
                    <title>Personal</title>
                </Head>
                <PageWrapper>
                    <DashBoard>
                    <form className={styles.form}>
                            <div className={styles.header}>
                                <Skeleton
                                    attributes={{
                                        height:"2rem",
                                        width:'min(100%,15rem)'
                                    }}
                                />
                                <Skeleton
                                    attributes={{
                                        height:"1.4rem",
                                        width:'min(100%,3rem)'
                                    }}
                                />
                            </div>
                            <>
                                {sample.map((s,i)=>{
                                    return(
                                        <section className={styles.section}  key={i}>
                                            <Skeleton
                                                attributes={{
                                                    height:'1rem',
                                                    width:'min(100%,3rem)'
                                                }}
                                            />
                                            <Skeleton
                                                attributes={{
                                                    height:'2rem',
                                                    width:'min(100%,23rem)'
                                                }}
                                            />
                                        </section>
                                    )
                                })
                                }
                            </>
                            <Skeleton
                                attributes={{
                                    height:'2rem',
                                    width:'min(100%,5rem)'
                                }}
                            />
                        </form>
                    </DashBoard>
                </PageWrapper>
            </div>
        )
    }
    else if(err){
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
    else{
        return (
            <div className="page">
                <Head>
                    <title>Personal</title>
                </Head>
                <PageWrapper>
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
                </PageWrapper>
            </div>
        )
    }
}

export default withAuth(Personal);