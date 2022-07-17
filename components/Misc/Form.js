import styles from '../../styles/form.module.css'

const Form =({animated,title,children,width,maxWidth,customClasses,headerSide})=>{
    return (
        <form 
            style={{
                width:width,
                maxWidth:maxWidth
            }}
            className={animated?`${styles.wrapper} ${customClasses} ${styles.pop}`:`${styles.wrapper} ${customClasses}`}
            >
            {
                title
                &&
                <h2 
                    style={{justifyContent:headerSide}}
                    className={styles.form_header}>
                    {title}
                </h2>
            }
            {children}
        </form>
    )
}

export default Form;