import styles from '../../styles/buttons.module.css'

import useripple from 'useripple'


const ButtonWrapper =({children,width,color})=>{
    const [addRipple, ripples] = useripple({background: color})
      return(
        <div
            style={{
                width:width?width:"100%"
            }} 
            onClick={addRipple} 
            className={styles.btn_wrapper}>
            {ripples}
            {children}
        </div>
      )
}

export default ButtonWrapper;