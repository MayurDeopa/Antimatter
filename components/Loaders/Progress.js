import styles from '../../styles/Spinner.module.css'

const Progress =({visible})=>{
    return(
        <div className={`${styles.progress_wrapper} ${visible?styles.progress_active:styles.progress_hidden}`}>
            <div class={styles.progress}>
                <div class={styles.indeterminate}>

                </div>
            </div>
            <div className={styles.progress_modal}/>
        </div>
    )
}

export default Progress;