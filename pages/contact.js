import styles from '../styles/form.module.css'

import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import EmptyState from '../components/Misc/EmptyState';
import PageWrapper from '../components/PageWrapper'

const Contact =()=>{
    return(
        <PageWrapper>
            <EmptyState>
                <PrimarySpinner
                    size={'m'}
                />
                <div className={styles.group}>
                    <input 
                        type={'text'}
                        required
                        className={styles.input}/>
                    <div className={styles.label}>Gas</div>
                </div>             
            </EmptyState>
        </PageWrapper>
    )
}

export default Contact;