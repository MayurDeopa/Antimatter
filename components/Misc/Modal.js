import styles from '../../styles/misc.module.css'

const Modal =({children})=>{
    return (
        <div className={styles.modal_wrapper}>
            {children}
        </div>
    )
}

export default Modal;