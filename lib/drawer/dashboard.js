import { logout } from "../../services/api/user.authentication";


export const dashboard =[
    
    {
        name:"Account Settings",
        hasChildren:true,
        children:[
            {
                name:"personal details",
                hasChildren:false,
                link:'/user/personal'
            },
            {
                name:"Shipping",
                hasChildren:false,
                link:'/user/shipping'
            },
        ]
    },
    {
        name:"My Orders",
        hasChildren:false,
    },
    {
        name:'Log Out',
        hasChildren:false,
        property:logout
    }
]