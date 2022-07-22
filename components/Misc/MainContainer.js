import styles from '../../styles/misc.module.css'
import form from '../../styles/form.module.css'

const MainContainer =({title,headerSide,children,height,justify,align,direction,width,maxWidth,customClasses,gap,...props})=>{
    return(
        <div
            style={{
                width:width,
                height:height,
                justifyContent:justify,
                alignItems:align,
                flexDirection:direction,
                maxWidth:maxWidth,
                gap:gap
            }} 
            {...props}
            className={`${styles.button_group} + ${customClasses && customClasses}`}>
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
        </div>
    )
}

export default MainContainer;