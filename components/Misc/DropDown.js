import { useState } from 'react';
import styles from '../../styles/buttons.module.css'
import AwaitButton from '../Loaders/AwaitButton';

const DropDown =({states})=>{
    const {text,children,size} = states
    const [hidden,setHidden] = useState(true)
    return(
        <div className={`${styles.dropdown}`}>
            <h3 
                onClick={()=>setHidden(!hidden)}
                className={styles.dropdown_header}>
                {text}
            </h3>
            <div className={hidden?`${styles.dropdown_children}`:`${styles.dropdown_children} ${styles.nothidden} `}>
                {children?.map((c,i)=>{
                    return <p key={i}>Pne</p>
                })}
            </div>
        </div>
    )
}

export default DropDown;