import { useState } from 'react';
import { shop ,company,user} from '../../lib/drawer/draweroptions';
import styles from '../../styles/Header.module.css'

import FileStructure from '../NestedComponent/FileStructure';

const Drawer =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    return(
        <div 
            className={isHidden?`${styles.drawer_container} ${styles.drawer_container_hidden}`:styles.drawer_container} 
            onClick={()=>setIsHidden(true)}>
            <nav className={isHidden?`${styles.drawer_wrapper} ${styles.drawer_hidden}`:styles.drawer_wrapper}>
                <div className={styles.drawer}>
                    <FileStructure
                        states={{
                            title:"Shop",
                            children:shop
                        }}
                    />
                    <FileStructure
                        states={{
                            title:'Company',
                            children:company
                        }}
                    />
                    <FileStructure
                        states={{
                            title:'User',
                            children:user
                        }}
                    />
                </div>              
            </nav>
        </div>
    )
}

export default Drawer;