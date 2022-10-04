import styles from '../../styles/form.module.css'

const Form =({animated,title,children,width,maxWidth,customClasses,headerSide,action,headerBorder,height})=>{
    const submit =(e)=>{
        e.preventDefault();
        action()
    }
    return (
        <form 
            onSubmit={submit}
            style={{
                width:width,
                height:height,
                maxWidth:maxWidth
            }}
            className={animated?`  ${customClasses} ${styles.wrapper} ${styles.pop}`:` ${customClasses} ${styles.wrapper} `}
            >
            {
                title
                &&
                <h2 
                    style={{
                        justifyContent:headerSide,
                        border:headerBorder
                    }}
                    className={styles.form_header}>
                    {title}
                </h2>
            }
            {children}
        </form>
    )
}

export default Form;