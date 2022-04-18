import styles from '../styles/card.module.css'

const Panel =({children,attributes})=>{
    return (
        <div 
            style={{
                height:attributes?.height || 'auto',
                width:attributes?attributes.width:"auto",
                borderRadius:attributes?.radius||'auto'
            }}
            className={styles.card}>
            {children}
        </div> 
    )
}

export default Panel;