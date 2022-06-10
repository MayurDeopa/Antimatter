import {SiStripe,SiRazorpay} from 'react-icons/si'
import styles from '../../styles/colors.module.css'
import { makePayment } from '../../services/api/payment'

export const gateways =[
    {
        name:"Razorpay",
        action:makePayment,
        icon:<SiRazorpay/>,
        state:'none',
        cssClass:styles.blue
    },
    {
        name:"Stripe",
        action:null,
        icon:<SiStripe/>,
        state:'none',
        cssClass:''
    }
]