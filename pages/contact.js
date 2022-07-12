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

const Contact =()=>{
    const [data,setData] = useState({
        "name":"",
        "email":"",
        "subject":"",
        "message":""
    })
    return(
        <PageWrapper>
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
                >
                    
                        <OptInput
                            placeholder={'Name'}
                            required
                            value={data.name}
                            action={setData}
                            array={data}
                            title={'name'}
                            isValid={data.name.length>4}
                        />
                        <OptInput
                            placeholder={'Email'}
                            required
                            value={data.email}
                            action={setData}
                            array={data}
                            title={'email'}
                            isValid={emailValidator(data.email)}
                        />
                    <OptInput
                            placeholder={'Subject'}
                            required
                            action={setData}
                            valued={data.subject}
                            array={data}
                            title={'subject'}
                            isValid={data.subject.length>10}
                        />
                    <OptInput
                        placeholder={'Message (Optional)'}
                        required
                        type={'textarea'}
                        value={data.message}
                        title={'message'}
                        action={setData}
                        array={data}
                        isValid
                    />
                    <MainContainer
                        maxWidth={'100%'}
                        justify={'flex-end'}
                    >
                        <SecondaryButton
                            text={'Submit'}
                            width={'10rem'}
                            awaitState={'disabled'}
                        />
                    </MainContainer>
                </Form>
            </MainContainer> 
        </PageWrapper>
    )
}

export default Contact;