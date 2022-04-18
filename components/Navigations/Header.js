import styles from '../../styles/Header.module.css'
import {FiShoppingBag,FiUser,FiSearch,FiMenu} from 'react-icons/fi'
import {GiCarnivoreMouth} from 'react-icons/gi'
import Link from 'next/link'


const Header =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    return (
        <nav className={styles.header_wrapper}>
            <nav className={styles.header}>
                <div 
                    className={styles.header_menu}
                    onClick={()=>setIsHidden(!isHidden)}>
                    <div className='svg_wrapper' style={{
                        justifyContent:'flex-start'
                    }}>
                        <FiMenu/>
                    </div>
                </div>
                <Link href={'/'}>
                    <header className={styles.header_title}>
                        <div className='svg_wrapper header_logo'>
                            <GiCarnivoreMouth/>
                        </div>
                    </header>
                </Link>
                <ul className={styles.header_ul}>
                    <li>
                        <Link href={'/shop'}>
                            <div className='svg_wrapper'>
                                <FiSearch/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/user'}>
                            <div className='svg_wrapper'>
                                <FiUser/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/cart'}>
                            <div className='svg_wrapper'>
                                <FiShoppingBag/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Header;