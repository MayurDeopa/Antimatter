import styles from '../../styles/misc.module.css'

const ButtonGroup =({children})=>{
    return(
        <div className={styles.button_group}>
            {children}
        </div>
    )
}

export default ButtonGroup;