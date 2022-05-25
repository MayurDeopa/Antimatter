import styles from '../../styles/buttons.module.css'


const IconBtn =({children,width,height,action})=>{
    return(
        <div 
            onClick={action}
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