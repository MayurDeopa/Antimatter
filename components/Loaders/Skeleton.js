import styles from '../../styles/skeleton.module.css'

const Skeleton =({attributes})=>{
    return (
        <div 
            style={{
                borderRadius:attributes?.border,
                height:attributes?.height?attributes.height: '3rem',
                width:attributes?.width?attributes.width: "100%"
            }}
            className={styles.wrapper}>
            
        </div>
    )
}

export default Skeleton;