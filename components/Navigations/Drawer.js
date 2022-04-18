import { useState } from 'react';
import { options } from '../../lib/drawer/draweroptions';
import styles from '../../styles/Header.module.css'
import NestedOptions from '../NestedComponent/NestedOptions';

const Drawer =({state})=>{
    const [isHidden,seIstHidden] = state.drawerState
    return(
        <nav className={isHidden?`${styles.drawer_wrapper} ${styles.drawer_hidden}`:styles.drawer_wrapper}>
            <ul className={styles.drawer}>
                {options.map((c,i)=>{
                    return (<li key={i}>
                        <NestedOptions child={c} listStateHidden={true}/>
                    </li>)
                })}
            </ul>
            <div 
                className={isHidden?`${styles.drawer_container_hidden}`:styles.drawer_container} 
                onClick={()=>seIstHidden(true)}></div>
        </nav>
    )
}

export default Drawer;