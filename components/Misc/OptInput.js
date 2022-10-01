import colors from '../../styles/colors.module.css'
import styles from '../../styles/form.module.css'

import MainContainer from './MainContainer'


const OptInput =({type,action,array,value,title,label,disabled,placeholder,maxWidth,required,isValid,errMsg,name,autoFocus})=>{
    let setData = action
    switch(type){
        case "textarea":
            return(
                <MainContainer
                    direction={'column'}
                    height={'170px'}
                    maxWidth={'100%'}
                >
                    <div 
                    style={{
                        maxWidth:maxWidth,
                        marginBottom:'1rem'
                    }}
                    className={`${styles.group} ${!isValid && colors.error_shadow}`}>
                    <textarea
                        autoFocus={autoFocus}
                        onChange={action}
                        className={`${styles.input}`}
                        value={value}
                        label={label}
                        disabled={disabled}   
                        required={required}       
                    />
                    <p className={styles.label}>{placeholder || title}</p>
                </div>
                {!isValid &&<p className={'error_message'}>{errMsg || `${placeholder} is required`}</p>}
                </MainContainer>
            )
    }
    return(
        <MainContainer
            direction={'column'}
            height={'71px'}
            maxWidth={'100%'}
        >
            <div 
            style={{maxWidth:maxWidth}}
            className={`${styles.group} ${!isValid && colors.error_shadow}`}>
            <input
                autoFocus={autoFocus}
                type={type}
                onChange={action}
                className={`${styles.input}`}
                value={value}
                label={label}
                name={name}
                disabled={disabled}    
                required={required}       
            />
            <p className={styles.label}>{placeholder || title}</p>
        </div>
        {!isValid &&<p className={'error_message'}>{errMsg || `${placeholder} is required`}</p>}
        </MainContainer>       
    )
}

export default OptInput;