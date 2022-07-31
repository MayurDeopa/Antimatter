import Link from "next/link";
import styles from '../../styles/buttons.module.css'
import ButtonWrapper from "../Loaders/BtnRipples";


const LinkBtn =({text,url,children,icon,width})=>{
    return (
        
            <ButtonWrapper
                width={width}
            >
                <Link href={url}>
                <div 
                    className={styles.secondary_button}>
                    <p>{text}</p>
                    {icon}
                    {children}
                </div>
                </Link>
            </ButtonWrapper>
    )
}

export default LinkBtn;