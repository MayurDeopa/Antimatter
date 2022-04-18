import { useState } from "react"
import styles from '../../styles/NestedComponents.module.css'
import {MdArrowDropDown} from 'react-icons/md'
import Link from 'next/link'

const NestedOptions=({child,listStateHidden})=>{
    const [hidden,setHidden] = useState(true)
    const fun = child.property
    if(listStateHidden){
        return (
            <div className={styles.container} style={{
                
            }}>
                {
                    child.link
                    ?
                    <Link  href={child.link} >
                        <a href={child.link}>
                            <h3  className={styles.title}>
                            {child.name}
                        
                            {child.hasChildren
                            ?
                            <MdArrowDropDown/>
                            :
                            null
                            }
                            </h3>
                        </a>
                    </Link>
                    :
                    <h3  className={styles.title} onClick={child.hasChildren?()=>setHidden(!hidden):fun}>
                        {child.name}
                    
                        {child.hasChildren
                        ?
                        <MdArrowDropDown/>
                        :
                        null
                        }
                        </h3>
                }
                {child.hasChildren?
                    <div className={hidden?`${styles.children_container} ${styles.hidden}`:styles.children_container}> 
                    
                    {child.children.map((c)=>{
                        return <NestedOptions child={c} key={c.name}/>
                    })}
                    
                
                </div>
                :null}
            </div>
        )
    }
    else{
        return (
            <div className={styles.container} style={{
                
            }}>
                {
                    child.link
                    ?
                    <Link href={child.link}>
                        <h3  className={styles.title}>
                        {child.name}
                    
                        {child.hasChildren
                        ?
                        <MdArrowDropDown/>
                        :
                        null
                        }
                        </h3>
                    </Link>
                    :
                    <h3  className={styles.title} onClick={fun}>
                        {child.name}
                    
                        {child.hasChildren
                        ?
                        <MdArrowDropDown/>
                        :
                        null
                        }
                        </h3>
                }
                {child.hasChildren?
                    <div className={styles.children_container}> 
                    
                    {child.children.map((c)=>{
                        return <NestedOptions child={c} key={c.name}/>
                    })}
                    
                
                </div>
                :null}
            </div>
        )
    }
}

export default NestedOptions;