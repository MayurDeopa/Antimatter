import styles from '../../styles/Header.module.css'
import {FiShoppingBag,FiShoppingCart,FiSearch,FiMenu,FiX} from 'react-icons/fi'
import Link from 'next/link'
import AntiMatterLogo from '../Display/AntiMatterLogo'



const Header =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    const [cartOpen,setCartOpen] = state.cartState
    return (
        <nav className={`${styles.header_wrapper} ${!isHidden && styles.light_wrapper}`}>
            <nav className={styles.header}>
            <div onClick={()=>setIsHidden(!isHidden)} className='svg_wrapper' style={{
                                justifyContent:'flex-start'
                            }}>
                                <AntiMatterLogo/>
                            </div>
                <Link href={'/'}>
                    <header className={styles.header_title}>
                        <h2 className='svg_wrapper header_logo'>
                            ANTI MATTER
                        </h2>
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
                    <li onClick={()=>setCartOpen(!cartOpen)}>
                            <div className='svg_wrapper'>
                                <FiShoppingCart/>
                            </div>
                    </li>

                </ul>
            </nav>
        </nav>
    )
}

export default Header;