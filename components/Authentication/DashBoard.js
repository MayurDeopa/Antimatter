import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Store } from '../../lib/drawer/context/StoreContext';
import styles from '../../styles/dashboard.module.css'
import NestedSideBar from '../Navigations/NestedSibeBar';

const DashBoard =({children})=>{
    const router = useRouter()
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    useEffect(()=>{
        if(!user) router.push('/user')
    },[])
    return (
        <div className={styles.dashboard}>
            <NestedSideBar/>
            <div className={styles.details}>
                {children}
            </div>
        </div>
    )
}

export default DashBoard;