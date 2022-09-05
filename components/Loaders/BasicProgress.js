import styles from '../../styles/Spinner.module.css'

const BasicProgress =({visible,width,position,bgColor,zIndex})=>{
    return(
        <div 
            style={{
                width:width,
                position:position?position:'absolute',
                backgroundColor:bgColor,
                zIndex:zIndex
            }}
            className={`${styles.progress_wrapper} ${visible?styles.progress_active:styles.progress_hidden}`}>
            <div className={styles.progress} style={{backgroundColor:bgColor}}>
                <div className={styles.indeterminate}>

                </div>             
            </div>
        </div>
    )
}

export default BasicProgress;