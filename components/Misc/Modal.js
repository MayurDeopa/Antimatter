import { useState } from 'react'
import styles from '../../styles/misc.module.css'
import {BiX} from 'react-icons/bi'

const Modal =({children,action,hidden})=>{
    
        return (
            <div className={hidden?`${styles.modal_wrapper} ${styles.modal_hidden}`:styles.modal_wrapper} onClick={action}>
                {children}
            </div>
        )
    
    
}

export default Modal;