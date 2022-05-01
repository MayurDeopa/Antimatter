import { useState } from 'react'
import styles from '../../styles/misc.module.css'
import {BiX} from 'react-icons/bi'

const Modal =({children,states})=>{
    const setOpen= states?.hook || null
    if(setOpen){
        return (
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_close}  onClick={setOpen}>
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