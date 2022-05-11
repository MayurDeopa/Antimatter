import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Store } from '../../lib/drawer/context/StoreContext';
import styles from '../../styles/dashboard.module.css'
import NestedSideBar from '../Navigations/NestedSibeBar';
import PageWrapper from '../PageWrapper'
import EmptyState from '../../components/Misc/EmptyState'
import {BiUserCircle} from 'react-icons/bi'

const DashBoard =({children})=>{
    const router = useRouter()
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    return (
        <PageWrapper>
            <div className={styles.dashboard}>
                <NestedSideBar/>
                <div className={styles.details}>
                    {
                        children
                        ?
                        children
                        :
                        <EmptyState>
                            <div className='large_svg'>
                            <BiUserCircle/>
                            </div>
                            <h1>Hello {user.username}</h1>
                        </EmptyState>
                    }
                </div>
            </div>
        </PageWrapper>
    )
}

export default DashBoard;