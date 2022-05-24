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
    },
    {
        name:"Apple",
        action:null,
        icon:<BsApple/>,
        state:'none',
        cssClass:''
    },
    {
        name:"Twitter",
        action:null,
        icon:<BsTwitter/>,
        state:'none',
        cssClass:styles.blue
    }
]