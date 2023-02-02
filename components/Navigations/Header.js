import styles from '../../styles/Header.module.css'
import {FiShoppingBag,FiShoppingCart,FiSearch,FiMenu,FiX} from 'react-icons/fi'
import Link from 'next/link'
import AntiMatterLogo from '../Display/AntiMatterLogo'
import { Container } from 'material-gas-ui'



const Header =({state})=>{
    const [isHidden,setIsHidden] = state.drawerState
    const [cartOpen,setCartOpen] = state.cartState
    return (
        <nav className={`${styles.header_wrapper} ${!isHidden && styles.light_wrapper}`}>
            <nav className={styles.header}>
            <div className='svg_wrapper' onClick={()=>setIsHidden(!isHidden)}>
                               {
                                isHidden
                                ?
                                <FiMenu/>
                                :
                                <FiX/>
                               }
                               </div>
                <Link href={'/'}>
                    <header className={styles.header_title}>
                        <h2 className='svg_wrapper header_logo'>
                            ANTI MATTER
                        </h2>
                    </header>
                </Link>
                <ul className={styles.header_ul}>
                    {/*<li>
                        <Link href={'/shop'}>
                            <div className='svg_wrapper'>
                                <FiSearch/>
                            </div>
                        </Link>
                            </li>*/}
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