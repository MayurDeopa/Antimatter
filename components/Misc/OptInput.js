import colors from '../../styles/colors.module.css'
import styles from '../../styles/form.module.css'



const OptInput =({type,action,array,value,title,label,disabled,placeholder,maxWidth,required,isValid})=>{
    let setData = action
    switch(type){
        case "textarea":
            return(
                <div 
                    style={{
                        maxWidth:maxWidth
                    }}
                    className={`${styles.group} ${!isValid && colors.error_shadow}`}>
                    <textarea
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
    return(
        <div 
            style={{maxWidth:maxWidth}}
            className={`${styles.group} ${!isValid && colors.error_shadow}`}>
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