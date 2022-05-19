
import styles from '../../styles/Spinner.module.css'

const PrimarySpinner=({states,light,size})=>{
    switch(size){
        case 'm':
            if(light){
                return(
                    <svg className={styles.wrapper} viewBox="0 0 50 50">
                         <circle className={styles.light} cx="25" cy="25" r="20" fill="none" strokeWidth={3}></circle>
                    </svg>
                )
            }
            else{
                return(
                    <svg className={styles.wrapper} viewBox="0 0 50 50">
                         <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth={3}></circle>
                    </svg>
                )
            }
        case "l":
            if(light){
                return(
                    <svg className={styles.wrapper} viewBox="0 0 50 50">
                         <circle className={styles.light} cx="25" cy="25" r="20" fill="none" strokeWidth={4}></circle>
                    </svg>
                )
            }
            else{
                return(
                    <svg className={styles.wrapper} viewBox="0 0 50 50">
                         <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth={4}></circle>
                    </svg>
                )
            }
        default:
            if(light){
                return(
                    <svg className={styles.wrapper} viewBox="0 0 50 50">
                         <circle className={styles.light} cx="25" cy="25" r="20" fill="none" strokeWidth={2}></circle>
                    </svg>
                )
            }
            else{
                return(
                    <svg className={styles.wrapper} viewBox="0 0 50 50">
                         <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth={2}></circle>
                    </svg>
                )
            }
    }
}

export default PrimarySpinner;