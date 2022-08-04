import styles from '../../styles/form.module.css'

const Select =({options,title,label,disabled,placeholder,maxWidth,required,isValid,errMsg,name})=>{
    return(
        <div className={styles.group}>
            <select 
                name={placeholder || title}
                required={required}
                className={styles.input} >
                {options.map((o,i)=>{
                    return(
                        <option 
                            value={o.name}
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