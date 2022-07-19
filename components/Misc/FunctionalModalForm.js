import Form from '../Misc/Form'
import Modal from '../Misc/Modal'

import styles from '../../styles/misc.module.css'
import {BiX} from 'react-icons/bi'

const FunctionalModalForm =({hook,title,children,maxWidth})=>{
    return(
        <Modal 
        >
            <Form 
                maxWidth={maxWidth}
                title={title}
                animated={true}
            >
                <div className={styles.modal_close} onClick={hook}>
                    <BiX/>
                </div>
                {children}
            </Form>
        </Modal>
    )
}

export default FunctionalModalForm;