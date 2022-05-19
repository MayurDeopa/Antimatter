import styles from '../styles/card.module.css'

const Panel =({children,height,width,padding,radius})=>{
    return (
        <div 
            style={{
                height:height || 'auto',
                width:width||"auto",
                borderRadius:radius||'auto',
                padding:padding || '0'
            }}
            className={styles.card}>
            {children}
        </div> 
    )
}

export default Panel;