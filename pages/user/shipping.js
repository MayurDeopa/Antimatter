import DashBoard from "../../components/Authentication/DashBoard"
import PageWrapper from "../../components/PageWrapper";
import styles from '../../styles/form.module.css'
import { useState } from "react";
import Input from "../../components/Authentication/Input";
import Head from "next/head";
import { useContext } from "react";
import { Store } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import PrimaryLoader from "../../components/Loaders/PrimaryLoader";
import withAuth from "../../components/Authentication/withAuth";
import Skeleton from "../../components/Loaders/Skeleton";

const Shipping =()=>{
    const sample =[1,2,5,6]
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const {awaiting,data,names,saveDetails} = useForm({
        id:user?.id,
        formType:'shipping'
    })
    const [details,setDetails] = useState({
        name:'',
        email:'',
        'phone number':''
    })
    const [edit,setEdit] = useState(false)
   if(awaiting){
    return (
        <div className="page">
            <Head>
                <title>Loading</title>
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
                                        </section>                                    )
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
   else{
    return (
        <div className="page">
            <Head>
                <title>Shipping</title>
            </Head>
            <PageWrapper>
                <DashBoard>
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <h2>
                                    Shipping Details
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
                                            value:data[n]
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

export default withAuth(Shipping);