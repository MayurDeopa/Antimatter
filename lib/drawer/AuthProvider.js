import {loginWithGoogle} from '../../services/api/user.authentication'
import {BsPerson,BsGoogle,BsApple,BsTwitter} from 'react-icons/bs'
import styles from '../../styles/colors.module.css'

export const providers =[
    {
        name:"Google",
        action:loginWithGoogle,
        icon:<BsGoogle/>,
        state:'none',
        cssClass:''
    }
]