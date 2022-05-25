import styles from '../../styles/Header.module.css'


const Breadcrumb =({children})=>{
    return(
        <div className={styles.bread}>
            {children}
        </div>
    )
}

export default Breadcrumb;