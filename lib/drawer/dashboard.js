import { logout } from "../../services/api/user.authentication";


export const dashboard =[
    
    {
        name:"Account Settings",
        hasChildren:true,
        children:[
            {
                name:"Personal details",
                hasChildren:false,
                link:'/user/personal'
            },
            {
                name:"Shipping details",
                hasChildren:false,
                link:'/user/shipping'
            },
        ]
    },
    {
        name:"My Orders",
        link:'/user/orders',
        hasChildren:false,
    },
    {
        name:'Log Out',
        hasChildren:false,
        property:logout
    }
]