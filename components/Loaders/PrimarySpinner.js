
import styles from '../../styles/Spinner.module.css'

const PrimarySpinner=({states})=>{
    if(states?.light){
        return(
            <svg className={styles.wrapper} viewBox="0 0 50 50">
                 <circle className={styles.light} cx="25" cy="25" r="20" fill="none" stroke-width="2"></circle>
            </svg>
        )
    }
    else{
        return(
            <svg className={styles.wrapper} viewBox="0 0 50 50">
                 <circle className={styles.path} cx="25" cy="25" r="20" fill="none" stroke-width="2"></circle>
            </svg>
        )
    }
}

export default PrimarySpinner;