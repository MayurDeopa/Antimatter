import styles from '../styles/card.module.css'

const Panel =({children,height,width,padding,radius,shadow})=>{
    return (
        <div 
            style={{
                height:height,
                width:width,
                borderRadius:radius,
                padding:padding,
                boxShadow:shadow
            }}
            className={styles.card}>
            {children}
        </div> 
    )
}

export default Panel;