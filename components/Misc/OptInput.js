import styles2 from '../../styles/colors.module.css'
import styles from '../../styles/form.module.css'


const OptInput =({type,action,array,value,title,label,disabled,placeholder,maxWidth,required})=>{
    let setData = action
    switch(type){
        case "textarea":
            return(
                <div 
                    style={{
                        maxWidth:maxWidth
                    }}
                    className={styles.group}>
                    <textarea
                        onChange={(e)=>action({...array,[title]:e.target.value})}
                        className={`${styles.input}`}
                        value={value}
                        label={label}
                        placeholder={""}
                        disabled={disabled}   
                        required={required}       
                    />
                    <p className={styles.label}>{placeholder || title}</p>
                </div>
            )
    }
    return(
        <div 
            style={{maxWidth:maxWidth}}
            className={styles.group}>
            <input
                type={type}
                onChange={(e)=>action({...array,[title]:e.target.value})}
                className={`${styles.input}`}
                value={value}
                label={label}
                disabled={disabled}    
                required={required}       
            />
            <p className={styles.label}>{placeholder || title}</p>
        </div>       
    )
}

export default OptInput;