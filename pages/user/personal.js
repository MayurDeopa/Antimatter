import DashBoard from "../../components/Authentication/DashBoard"
import PageWrapper from "../../components/PageWrapper";
import styles from '../../styles/form.module.css'
import Head from 'next/head'
import { useState } from "react";
import PrimaryLoader from '../../components/Loaders/PrimaryLoader'
import Input from "../../components/Authentication/Input";
import { Store, useStore } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import withAuth from "../../components/Authentication/withAuth";


const Personal =()=>{
    const {userState,userDetails} = useStore()
    const [user,setUser] = userState
    const {personal} = userDetails
    const [personalDetails,setPersonalDetails] = personal
    const [details,setDetails] = useState({
        name:'',
        email:'',
        'phone number':''
    })
    const [edit,setEdit] = useState(false)
    const {awaiting,data,names,saveDetails} = useForm({
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
                        <div className='flex_center'>
                            <PrimaryLoader/>
                        </div>
                    </DashBoard>
                </PageWrapper>
            </div>
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
                                {names.map((n,i)=>{
                                    return <Input 
                                        value={{
                                            title:n,
                                            value:personalDetails[n]
                                        }}
                                        state={{
                                            editState:[edit,setEdit],
                                            form:[details,setDetails]
                                        }}
                                        key={i}
                                        />
                                })}
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