import { footer } from '../../lib/drawer/footeroptions';
import styles from '../../styles/Header.module.css'
import FileStructure from '../NestedComponent/FileStructure';

const Footer =()=>{
    return(
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer}>
                <FileStructure
                    title={"Company"}
                    items={footer}
                />
                <FileStructure
                    title={"Company"}
                    items={footer}
                />
            </div>
        </footer>
    )
}

export default Footer;