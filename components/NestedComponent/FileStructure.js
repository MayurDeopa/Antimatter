import { useState } from "react";

import Link from 'next/link'

import styles from '../../styles/Header.module.css'

const FileStructure =({items,title})=>{
    return(
        <span className={styles.drawer_groups}>
            <h3>{title}</h3>    
            {items.map((c,i)=>{
                return (
                    <Link 
                        href={c.link}
                        key={i}
                        >
                        <p>{c.name}</p>
                    </Link>
                )
            })}
        </span>
    )
}

export default FileStructure;