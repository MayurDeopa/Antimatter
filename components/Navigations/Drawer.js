import { useState } from 'react';
import { shop ,company,user} from '../../lib/drawer/draweroptions';
import styles from '../../styles/Header.module.css'
import NestedOptions from '../NestedComponent/NestedOptions';
import FileStructure from '../NestedComponent/FileStructure';
import Link from 'next/link'

const Drawer =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    return(
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
            <div 
                className={isHidden?`${styles.drawer_container_hidden}`:styles.drawer_container} 
                onClick={()=>setIsHidden(true)}/>
        </nav>
    )
}

export default Drawer;