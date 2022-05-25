import styles from '../../styles/buttons.module.css'


const IconBtn =({children,width,height})=>{
    return(
        <div 
            style={{
                height:height,
                width:width
            }}
            className={styles.icon_btn}>
            {children}
        </div>
    )
}

export default IconBtn;