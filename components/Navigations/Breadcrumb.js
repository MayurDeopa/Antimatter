import styles from '../../styles/Header.module.css'

import Link from 'next/link'


const Breadcrumb =({paths})=>{
    return(
        <div className={styles.bread}>
            {paths.map((p,i)=>{
                if(paths.length===1){
                    return(
                        <>
                            <Link
                                key={i} 
                                href={p.path}>
                                <div>
                                    {p.title}
                                </div>
                            </Link>
                            /
                        </>
                    )
                }
                else{
                    if(i===paths.length - 1){
                        return(
                            <>
                                <div key={i} >
                                    {p.title}
                                </div>
                                /
                            </>
                        )
                    }
                }
                return(
                    <>
                            <Link key={i}  href={p.path}>
                                <div>
                                    {p.title}
                                </div>
                            </Link>
                            /
                        </>
                )
            })}
        </div>
    )
}

export default Breadcrumb;