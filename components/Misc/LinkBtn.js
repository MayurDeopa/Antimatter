import Link from "next/link";
import styles from '../../styles/buttons.module.css'


const LinkBtn =({text,url,children,icon})=>{
    return (
        <Link href={url}>
            <div className={styles.secondary_button}>
                <p>{text}</p>
                {icon}
                {children}
            </div>
        </Link>
    )
}

export default LinkBtn;