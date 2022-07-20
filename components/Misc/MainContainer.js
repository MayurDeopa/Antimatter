import styles from '../../styles/misc.module.css'

const MainContainer =({children,height,justify,align,direction,width,maxWidth,customClasses,gap,...props})=>{
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
            {children}
        </div>
    )
}

export default MainContainer;