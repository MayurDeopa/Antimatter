import { footer } from '../../lib/drawer/footeroptions';
import styles from '../../styles/Header.module.css'
import FileStructure from '../NestedComponent/FileStructure';

const Footer =()=>{
    return(
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer}>
            © AntiMatter 2022.
            </div>
        </footer>
    )
}

export default Footer;