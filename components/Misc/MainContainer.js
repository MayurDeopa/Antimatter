import styles from '../../styles/misc.module.css'

const MainContainer =({children,justify,align,direction,width,maxWidth,customClasses,gap})=>{
    return(
        <div
            style={{
                width:width,
                justifyContent:justify,
                alignItems:align,
                flexDirection:direction,
                maxWidth:maxWidth,
                gap:gap
            }} 
            className={`${styles.button_group} + ${customClasses}`}>
            {children}
        </div>
    )
}

export default MainContainer;