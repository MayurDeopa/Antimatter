import styles from '../../styles/Header.module.css'

import Link from 'next/link'


const Breadcrumb =({paths})=>{
    return(
        <div className={styles.bread}>
            {paths.map((p,i)=>{
                return(
                    <>
                        <Link href={p.path}>
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