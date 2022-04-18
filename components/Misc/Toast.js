import styles from '../../styles/misc.module.css'

const Toast =({children})=>{
    return (
        <div className={styles.toast}>
            {children}
        </div>
    )
}

export default Toast;