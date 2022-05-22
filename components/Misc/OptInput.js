import styles2 from '../../styles/colors.module.css'
import styles from '../../styles/form.module.css'


const OptInput =({type,action,array,value,title})=>{
    let setData = action
    return(
        <input
            type={type}
            onChange={(e)=>setData({...array,[title]:e.target.value})}
            className={`${styles.section_label}`}
            value={value}
        />
    )
}

export default OptInput;