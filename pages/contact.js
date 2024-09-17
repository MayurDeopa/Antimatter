import styles from '../styles/contact.module.css'

import { useState } from 'react';

import PageWrapper from '../components/PageWrapper'
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import OptInput from '../components/Misc/OptInput';
import { emailValidator } from '../lib/drawer/validators';
import Head from 'next/head';
import { Button } from 'material-gas-ui';
import { collect } from '../services/api/collect';

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

    const [isLoading,setIsLoading] = useState(false)

    const handleSubmit = async()=>{
        setIsLoading(true)
        await collect.contactQuery(data)
        setIsLoading(false)
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
                    maxWidth={'50rem'}
                    action={handleSubmit}
                >
                    
                        <OptInput
                            placeholder={'Name'}
                            required
                            disabled={isLoading}
                            value={data.name}
                            type={'name'}
                            action={(e)=>setInput('name',e.target.value)}
                            title={'name'}
                            isValid
                        />
                        <OptInput
                            placeholder={'Email'}
                            required
                            disabled={isLoading}
                            value={data.email}
                            type='email'
                            action={(e)=>setInput('email',e.target.value)}
                            title={'email'}
                            isValid
                        />
                    <OptInput
                            placeholder={'Subject'}
                            required
                            disabled={isLoading}
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
                        disabled={isLoading}
                        action={(e)=>setInput('message',e.target.value)}
                        isValid
                        required
                    />
                    <MainContainer
                        maxWidth={'100%'}
                        justify={'flex-end'}
                    >
                        <Button
                            text={'Submit'}
                            styles={{backgroundColor:'var(--primary-theme-color)',borderRadius:'4px',width:'150px'}}
                            type='submit'
                            loading={isLoading}
                            disabled={isLoading}
                        />
                    </MainContainer>
                </Form>
            </MainContainer> 
        </PageWrapper>
    )
}

export default Contact;