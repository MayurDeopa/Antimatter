import Link from "next/link";
import styles from '../../styles/buttons.module.css'
import ButtonWrapper from "../Loaders/BtnRipples";


const LinkBtn =({text,url,children,icon,width})=>{
    return (
        

                <Link href={url}>
                <div 
                    style={{
                        width:width
                    }}
                    className={styles.link}>
                    <p>{text}</p>
                    {icon}
                    {children}
                </div>
                </Link>
    )
}

export default LinkBtn;