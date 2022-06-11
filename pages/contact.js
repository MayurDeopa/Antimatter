import styles from '../styles/form.module.css'

import SecondaryButton from '../components/Loaders/SecondaryButton'
import Skeleton from '../components/Loaders/Skeleton';
import EmptyState from '../components/Misc/EmptyState';
import PageWrapper from '../components/PageWrapper'
import Progress from '../components/Loaders/Progress';
import { useState } from 'react';

const Contact =()=>{
    const [value,setValue] = useState(0)
    return(
        <PageWrapper>
            <EmptyState>
                <Skeleton/>
                <div className={styles.group}>
                    <input 
                        type={'text'}
                        required
                        className={styles.input}/>
                    <div className={styles.label}>Gas</div>
                </div>    
                <Progress
                    width={'100%'}
                    value={value}
                />      
                <SecondaryButton
                    width={'10rem'}
                    text={'+'}
                    action={()=>setValue((prev)=>prev + 10)}
                />  
            </EmptyState>
        </PageWrapper>
    )
}

export default Contact;