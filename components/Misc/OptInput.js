import styles from '../../styles/form.module.css'

const OptInput =({states})=>{
    const {type,action} = states
    return(
        <input
            type={type}
            onChange={(e)=>action(e.target.value)}
            className={styles.section_label}
        />
    )
}

export default OptInput;