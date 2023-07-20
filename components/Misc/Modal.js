
import styles from '../../styles/misc.module.css'


const Modal =({children,action,open})=>{    
    
        return (
            <div className={!open?`${styles.modal_wrapper} ${styles.modal_hidden}`:styles.modal_wrapper} onClick={action}>
                {children}
            </div>
        )
    
    
}

export default Modal;