import { useState } from "react";

import Link from 'next/link'

import styles from '../../styles/Header.module.css'

const FileStructure =({states})=>{
    const {children,title} = states
    return(
        <div className={styles.drawer_groups}>
            <h4>{title}</h4>    
            {children.map((c,i)=>{
                return (
                    <Link 
                        href={c.link}
                        key={i}
                        >
                        <p>{c.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default FileStructure;