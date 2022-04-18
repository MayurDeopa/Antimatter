import styles from '../../styles/dashboard.module.css'
import NestedOptions from '../NestedComponent/NestedOptions'
import { dashboard } from '../../lib/drawer/dashboard'

const NestedSideBar=()=>{
    return (
        <div className={styles.sidebar}>
                {dashboard.map((c,i)=>{
                    return <NestedOptions child={c} key={i} listStateHidden={false}/>   
                })}
            </div>
    )
}

export default NestedSideBar;