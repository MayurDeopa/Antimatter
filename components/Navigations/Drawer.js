import { useState } from 'react';
import { options } from '../../lib/drawer/draweroptions';
import styles from '../../styles/Header.module.css'
import NestedOptions from '../NestedComponent/NestedOptions';
import Link from 'next/link'

const Drawer =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    return(
        <nav className={isHidden?`${styles.drawer_wrapper} ${styles.drawer_hidden}`:styles.drawer_wrapper}>
            {/*<header className={styles.drawer_header}>
                <Link href={'/'}>
                    <h2>ANTI*MATTER</h2>
                </Link>
                <h2 onClick={()=>setIsHidden(true)}>X</h2>
    </header>*/}
            <ul className={styles.drawer}>
                {options.map((c,i)=>{
                    return (<li key={i}>
                        <NestedOptions child={c} listStateHidden={true}/>
                    </li>)
                })}
            </ul>
            <div 
                className={isHidden?`${styles.drawer_container_hidden}`:styles.drawer_container} 
                onClick={()=>setIsHidden(true)}></div>
        </nav>
    )
}

export default Drawer;