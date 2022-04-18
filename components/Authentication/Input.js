import { useState } from 'react';
import { firstLetterToUpperCase } from '../../services/other';
import styles from '../../styles/form.module.css'

const Input = ({value,state})=>{
    const {editState,form} = state
    const [details,setDetails] = form
    const [edit,setEdit] = editState
    return (
        <section className={styles.section}>
            <h3 className={styles.section_header}>
                {firstLetterToUpperCase(value.title)}
            </h3>
            <input 
                type='text' 
                className={edit?styles.section_label:styles.disabled} 
                value={value.value}
                disabled={edit?false:true}
                onChange ={(e)=>setDetails({...details,[value]:e.target.value})}
            />
            
        </section>
        )
}

export default Input;