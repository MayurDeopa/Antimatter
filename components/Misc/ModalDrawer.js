import styles from '../../styles/misc.module.css'
import Modal from "./Modal";


const ModalDrawer =({children})=>{
    return (
        <Modal>
            <div className={styles.drawer}>
                {children}
            </div>
        </Modal>
    )
}

export default ModalDrawer;