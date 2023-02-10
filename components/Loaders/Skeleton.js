import styles from '../../styles/skeleton.module.css'

const Skeleton =({border,height,width})=>{


    return (
        <div 
            style={{
                borderRadius:border,
                height:height|| '3rem',
                width:width|| "100%",
            }}
            className={styles.wrapper}>
            
        </div>
    )
}

export default Skeleton;