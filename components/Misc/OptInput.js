import { useState } from 'react'
import colors from '../../styles/colors.module.css'
import styles from '../../styles/form.module.css'

import MainContainer from './MainContainer'


const OptInput =({type,action,array,value,title,label,disabled,placeholder,maxWidth,required,isValid,errMsg,name,autoFocus})=>{

    const [isInputValid,setIsInputValid] = useState(true)

    const valid =(data)=>{
        let dataValue = data.length!==0
        setIsInputValid(dataValue)
    }

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
                    className={`${styles.group} ${!isInputValid && colors.error_shadow}`}>
                    <textarea
                        autoFocus={autoFocus}
                        onChange={action}
                        className={`${styles.input}`}
                        value={value}
                        label={label}
                        disabled={disabled}   
                        required={required}     
                        onBlur={()=>valid(value)}  
                        placeholder={placeholder}
                    />
                </div>
               
                </MainContainer>
            )
    }
    return(
        <MainContainer
            direction={'column'}
            maxWidth={'100%'}
        >
            <div 
            style={{maxWidth:maxWidth}}
            className={`${styles.group} ${!isInputValid && colors.error_shadow}`}>
            <input
                placeholder={placeholder}
                autoFocus={autoFocus}
                type={type}
                onChange={action}
                className={`${styles.input}`}
                value={value}
                label={label}
                name={name}
                disabled={disabled}    
                required={required} 
                onBlur ={()=>valid(value)}      
            />
        </div>
        </MainContainer>       
    )
}

export default OptInput;