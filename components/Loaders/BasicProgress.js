import styles from '../../styles/Spinner.module.css'

const BasicProgress =({visible,width,position})=>{
    return(
        <div 
            style={{
                width:width,
                position:position?position:'absolute'
            }}
            className={`${styles.progress_wrapper} ${visible?styles.progress_active:styles.progress_hidden}`}>
            <div className={styles.progress}>
                <div className={styles.indeterminate}>

                </div>             
            </div>
        </div>
    )
}

export default BasicProgress;