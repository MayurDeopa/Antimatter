import styles from '../../styles/Spinner.module.css'

const Progress =({width,value})=>{
    return(
        <progress
            value={value}
            max={100}
            style={{width:width}}
            className={styles.progress}
        />
    )
}

export default Progress;