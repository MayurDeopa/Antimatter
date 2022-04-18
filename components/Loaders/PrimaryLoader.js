
import styles from '../../styles/Spinner.module.css'

const PrimaryLoader=({states})=>{
    if(states?.light){
        return(
            <div className={`${styles.wrapper} ${styles.light}`}>
            </div>
        )
    }
    else{
        return(
            <div className={styles.wrapper}>
            </div>
        )
    }
}

export default PrimaryLoader;