import styles from '../../styles/form.module.css'

const Form =({animated,title,children,width,maxWidth,customClasses,headerSide,action})=>{
    const submit =(e)=>{
        e.preventDefault();
        action()
    }
    return (
        <form 
            onSubmit={submit}
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