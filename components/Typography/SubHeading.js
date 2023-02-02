
import styles from '../../styles/text.module.css'

const SubHeading =({h,children})=>{
    switch(h){
        case 1:
            return(
                <h1 className={styles.sub_heading}>
                    {children}
                </h1>
            )
        case 2:
            return(
                <h2 className={styles.sub_heading}>
                    {children}
                </h2>
            )
        case 3:
            return(
                <h3 className={styles.sub_heading}>
                    {children}
                </h3>
            )
        case 4:
            return(
                <h4 className={styles.sub_heading}>
                    {children}
                </h4>
            )
        default:
            return(
                <h2 className={styles.sub_heading}>
                    {children}
                </h2>
            )
    }
}

export default SubHeading