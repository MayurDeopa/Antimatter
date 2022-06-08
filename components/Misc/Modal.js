import { useState } from 'react'
import styles from '../../styles/misc.module.css'
import {BiX} from 'react-icons/bi'

const Modal =({children,hook})=>{
    if(hook){
        return (
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_close}  onClick={hook}>
                    <BiX/>
                </div>
                {children}
            </div>
        )
    }
    else{
        return (
            <div className={styles.modal_wrapper}>
                {children}
            </div>
        )
    }
    
}

export default Modal;