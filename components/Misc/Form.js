import styles from '../../styles/form.module.css'

const Form =({card,children})=>{
    return (
        <form className={card.animated?`${styles.wrapper} ${styles.pop}`:styles.wrapper}    >
            <h2 className={styles.form_header}>
                {card.title}
            </h2>
            {children}
        </form>
    )
}

export default Form;