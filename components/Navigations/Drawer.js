import { useState } from 'react';
import { shop ,company} from '../../lib/drawer/draweroptions';
import styles from '../../styles/Header.module.css'

import FileStructure from '../NestedComponent/FileStructure';

const Drawer =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    return(
        <>
            <nav className={isHidden?`${styles.drawer_wrapper} ${styles.drawer_hidden}`:styles.drawer_wrapper}>
                <div className={styles.drawer}>
                    <FileStructure
                        title={"Shop"}
                        items={shop}
                    />
                    <FileStructure
                        title={'Company'}
                        items={company}
                    />
                </div>             
            </nav>
            <div 
            className={isHidden?`${styles.drawer_container} ${styles.drawer_container_hidden}`:styles.drawer_container} 
            onClick={()=>setIsHidden(true)}>
            
        </div> 
        </>
    )
}

export default Drawer;