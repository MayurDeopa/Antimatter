import { useEffect } from 'react'
import styles from '../../styles/form.module.css'

const Select =({options,title,label,disabled,placeholder,maxWidth,required,isValid,errMsg,name,action})=>{
    return(
        
        <div className={styles.group}>
            <select 
                name={placeholder || title}
                required={required}
                className={styles.input}
                onChange={action}
                >
                {options.map((o,i)=>{
                    return(
                        <option 
                            key={i}
                            value={o.id}
                            placeholder={o.name}
                            style={{
                                backgroundColor:'black'
                            }}>
                                {o.name}
                            </option>
                    )
                })}
            </select>
            <p className={styles.label}>{placeholder || title}</p>
        </div>
    )
}

export default Select;