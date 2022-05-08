import {loginWithGoogle} from '../../services/api/user.authentication'
import {BsPerson,BsGoogle,BsApple,BsTwitter} from 'react-icons/bs'


export const providers =[
    {
        name:"Google",
        action:loginWithGoogle,
        icon:<BsGoogle/>,
        state:'none',
    },
    {
        name:"Apple",
        action:null,
        icon:<BsApple/>,
        state:'none'
    },
    {
        name:"Twitter",
        action:null,
        icon:<BsTwitter/>,
        state:'none'
    }
]