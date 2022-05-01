import styles from '../../styles/form.module.css'

const FormSection =({children})=>{
    return(
        <div className={styles.form_section}>
            {children}
        </div>
    )
}

export default FormSection;