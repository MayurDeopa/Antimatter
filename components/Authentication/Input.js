import { useState } from 'react';
import { firstLetterToUpperCase } from '../../services/other';
import styles from '../../styles/form.module.css'

const Input = ({value,state})=>{
    const {editState,form} = state
    const [details,setDetails] = form
    const [edit,setEdit] = editState
    const [data,setData] = useState(value.value)
    return (
        <section className={styles.section}>
            <p className={styles.section_header}>
                {firstLetterToUpperCase(value.title)}
            </p>
            <input 
                type='text' 
                value={data}
                className={edit?styles.section_label:styles.disabled} 
                disabled={edit?false:true}
                onChange ={(e)=>setData(e.target.value)}
            />
            
        </section>
        )
}

export default Input;