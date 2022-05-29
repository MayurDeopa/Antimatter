import Link from 'next/link';
import { loginWithGoogle } from '../../services/api/user.authentication';
import {BsPerson,BsGoogle,BsApple,BsTwitter} from 'react-icons/bs'
import styles from '../../styles/authentication.module.css'
import { useContext } from 'react';
import  { Store } from '../../lib/drawer/context/StoreContext';
import { decodeJwt } from '../../lib/drawer/decode';
import { useState } from 'react';
import SecondaryButton from '../Loaders/SecondaryButton'
import PrimaryButton from '../Loaders/PrimaryButton'
import { useRouter } from 'next/router';
import { providers } from '../../lib/drawer/AuthProvider';
import Toast from '../Misc/Toast';
import Message from '../basic/Message';
import PageWrapper from '../PageWrapper';

const Login =()=>{
    const router = useRouter()
    const [authProviders,setAuthProviders] = useState(providers)
    const {userState}= useContext(Store)
    const [user,setUser] = userState
    const [err,setErr] = useState(false)

    const login =async(data)=>{
        const fun = data.action
        setErr()
        setAuthProviders(authProviders.map((a)=>a.name!==data.name?{...a,state:'disabled'}:{...a,state:'loading'}))
        if(fun){
            try{
                const res = await fun()
                if(res.status==="ok"){
                    localStorage.setItem('key',JSON.stringify(res.user))
                    setUser(decodeJwt(res.user))
                }
                else{
                    setErr({
                        type:'failed',
                        message:res.messsage
                    })
                }
            }catch(error){
                setErr({
                    type:'failed',
                    message:error.messsage
                })
                setAuthProviders(providers)
            }
        }
    }
    
    return (
        <PageWrapper>
            <div className={styles.card}> 
                <div className={styles.card_header}>
                <div className='svg_wrapper' style={{
                    fontSize:'60px'
                }}>
                    <BsPerson/>
                </div>
                <h1>
                    Log In
                </h1>
            </div>
            <div className={styles.card_input_wrapper}>
                {authProviders.map((p,i)=>{
                    if(p.name==='Google'){
                        return(
                            <SecondaryButton
                                awaitState={p.state}
                                text={`Continue with ${p.name}`}
                                action={()=>login(p)}
                                light={true}
                                icon={p.icon}
                                key={i}
                                cssClasses={p.cssClass}
                            />
                        )
                    }
                    return (
                        <PrimaryButton
                            awaitState={p.state}
                            text={`Continue with ${p.name}`}
                            action={()=>login(p)}
                            light={true}
                            icon={p.icon}
                            key={i}
                            cssClasses={p.cssClass}
                        >
                        </PrimaryButton>
                    )
                })}
            </div>
            <div className={styles.card_footer}>
                <h3>
                    by logging in you agree to our 
                    <Link href={'/about'}>
                        <p className='link'>Terms and Conditions</p>
                    </Link>
                </h3>
            </div>
            {
                err
                &&
                <Toast>
                    <Message
                        states={err}
                    />
                </Toast>
            }
        </div>
        </PageWrapper>
    )
}

export default Login;