import { useState } from 'react'
import styles from '../../styles/misc.module.css'
import {BiX} from 'react-icons/bi'

const Modal =({children})=>{
    
        return (
            <div className={styles.modal_wrapper}>
                {children}
            </div>
        )
    
    
}

export default Modal;