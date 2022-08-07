import { useEffect } from 'react'
import styles from '../../styles/form.module.css'
import MainContainer from './MainContainer';
import colors from '../../styles/colors.module.css'

const Select =({options,title,label,disabled,placeholder,maxWidth,required,isValid,errMsg,name,action,height})=>{
    let isObject = !Array.isArray(options)
    return(
        <MainContainer
            direction={'column'}
            height={height}
        >
            <div className={styles.group}>
            <select 
                name={placeholder || title}
                required={required}
                className={styles.input}
                onChange={action}
                >
                {
                    isObject
                    ?
                    Object.keys(options).map((k,i)=>{
                        return(
                            <option 
                                key={i}
                                value={k}
                                placeholder={options[k]}
                                style={{
                                    backgroundColor:'black'
                                }}>
                                    {options[k]}
                                </option>
                        )
                    })
                    :
                    options.map((o,i)=>{
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
                    })
                }
            </select>
            <p className={styles.label}>{placeholder || title}</p>
        </div>
        {!isValid &&<p className={'error_message'}>{errMsg || `${placeholder} is required`}</p>}
        </MainContainer>
    )
}

export default Select;