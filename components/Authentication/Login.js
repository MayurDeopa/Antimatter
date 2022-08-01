import Link from 'next/link';
import { loginWithGoogle } from '../../services/api/user.authentication';
import {BsPerson,BsGoogle,BsApple,BsTwitter} from 'react-icons/bs'
import styles from '../../styles/authentication.module.css'
import { useContext } from 'react';
import  { useStore } from '../../lib/drawer/context/StoreContext';
import { decodeJwt } from '../../lib/drawer/decode';
import { useState } from 'react';
import SecondaryButton from '../Loaders/SecondaryButton'
import PrimaryButton from '../Loaders/PrimaryButton'
import OptInput from '../Misc/OptInput'
import Toast from '../Misc/Toast';
import Message from '../basic/Message';
import PageWrapper from '../PageWrapper';
import Progress from '../Loaders/Progress'

import { providers } from '../../lib/drawer/AuthProvider';
import Otp from './Otp';
import useModal from '../../lib/drawer/customhooks/useModal';

const Login =()=>{
    const {open,toggleModal} = useModal()
    const [authProviders,setAuthProviders] = useState(providers)
    const {userState,progressState} = useStore()
    const [progress,setProgress] = progressState
    const [user,setUser] = userState
    const [err,setErr] = useState(false)

    const login =async(data)=>{
        const fun = data.action
        setErr()
        setProgress(true)
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
            }
        }
        setProgress(false)
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
                        return(
                            <SecondaryButton
                                awaitState={p.state}
                                text={`Continue with ${p.name}`}
                                action={()=>login(p)}
                                light={true}
                                icon={p.icon}
                                key={i}
                            />
                        )
                    
                })}
                Or
                <SecondaryButton
                    awaitState={'none'}
                    text={`Continue with Phone number`}
                    action={toggleModal}
                    light={true}
                />
            </div>
            <div className={styles.card_footer}>
                <h4>
                    by logging in you agree to our 
                    <Link href={'/about'}>
                        <p className='link'>Terms and Conditions</p>
                    </Link>
                </h4>
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
            {
                open
                &&
                <Otp
                    hook={toggleModal}
                />
            }
        </div>
        </PageWrapper>
    )
}

export default Login;