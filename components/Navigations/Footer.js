import { footer } from '../../lib/drawer/footeroptions';
import styles from '../../styles/Header.module.css'
import FileStructure from '../NestedComponent/FileStructure';

const Footer =()=>{
    return(
        <footer className={styles.footer}>
            <FileStructure
                title={"Company"}
                children={footer}
            />
            <FileStructure
                title={"Company"}
                children={footer}
            />
        </footer>
    )
}

export default Footer;