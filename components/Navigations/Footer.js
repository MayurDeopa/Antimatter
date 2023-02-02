import { Container } from 'material-gas-ui';
import Link from 'next/link';
import { footer } from '../../lib/drawer/footeroptions';
import styles from '../../styles/Header.module.css'
import FileStructure from '../NestedComponent/FileStructure';

const Footer =()=>{
    return(
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer}>
            <Container styles={{width:'auto'}}>
                <Link href={'/about'}>
                    <p>About</p>
                </Link>
                <Link href={'/terms'}>
                    <p>Terms</p>
                </Link>
            </Container>
            <a href={'https://www.instagram.com/antimatter.cmp/'} target='_blank' rel="noreferrer">
                    <p>Instagram</p>
                </a>
            <p>© AntiMatter 2022.</p>
            </div>
        </footer>
    )
}

export default Footer;