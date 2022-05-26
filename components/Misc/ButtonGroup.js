import styles from '../../styles/misc.module.css'

const ButtonGroup =({children,justify})=>{
    return(
        <div
            style={{
                justifyContent:justify
            }} 
            className={styles.button_group}>
            {children}
        </div>
    )
}

export default ButtonGroup;