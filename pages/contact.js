import styles from '../styles/contact.module.css'

import { useState } from 'react';

import SecondaryButton from '../components/Loaders/SecondaryButton'
import Skeleton from '../components/Loaders/Skeleton';
import EmptyState from '../components/Misc/EmptyState';
import PageWrapper from '../components/PageWrapper'
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import OptInput from '../components/Misc/OptInput';
import { emailValidator } from '../lib/drawer/validators';
import Head from 'next/head';

const Contact =()=>{
    const [data,setData] = useState({
        "name":"",
        "email":"",
        "subject":"",
        "message":""
    })
    const setInput=(key,value)=>{
        setData({...data,[key]:value})
    }
    return(
        <PageWrapper>
            <Head>
                <title>Contact us</title>
            </Head>
           <MainContainer
            customClasses={styles.container}
            justify={'center'}
            gap={0}
            maxWidth={'100%'}
           >
                <MainContainer
                    customClasses={styles.banner}
                    direction={'column'}
                >
                    <h2>Contact us</h2>
                    <p>You can contact the support from the form on right, or reach out to us on social media.</p>
                </MainContainer>
                <Form
                    action={()=>console.log('some')}
                    maxWidth={'50rem'}
                >
                    
                        <OptInput
                            placeholder={'Name'}
                            required
                            value={data.name}
                            type={'name'}
                            action={(e)=>setInput('name',e.target.value)}
                            title={'name'}
                            isValid
                        />
                        <OptInput
                            placeholder={'Email'}
                            required
                            value={data.email}
                            type='email'
                            action={(e)=>setInput('email',e.target.value)}
                            title={'email'}
                            isValid
                        />
                    <OptInput
                            placeholder={'Subject'}
                            required
                            action={(e)=>setInput('subject',e.target.value)}
                            value={data.subject}
                            title={'subject'}
                            isValid
                        />
                    <OptInput
                        placeholder={'Message'}
                        type={'textarea'}
                        value={data.message}
                        title={'message'}
                        action={(e)=>setInput('message',e.target.value)}
                        isValid
                        required
                    />
                    <MainContainer
                        maxWidth={'100%'}
                        justify={'flex-end'}
                    >
                        <SecondaryButton
                            text={'Submit'}
                            width={'10rem'}
                            awaitState={'none'}
                            type='submit'
                        />
                    </MainContainer>
                </Form>
            </MainContainer> 
        </PageWrapper>
    )
}

export default Contact;