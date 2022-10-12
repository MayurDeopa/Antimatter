import Link from 'next/link';
import { footer } from '../../lib/drawer/footeroptions';
import styles from '../../styles/Header.module.css'
import FileStructure from '../NestedComponent/FileStructure';

const Footer =()=>{
    return(
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer}>
            <p>© AntiMatter 2022.</p>
            <Link href={'/about'}>
                <p>About</p>
            </Link>
            <Link href={'/terms'}>
                <p>Terms</p>
            </Link>
            </div>
        </footer>
    )
}

export default Footer;