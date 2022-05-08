

export const options =[
    {
        name:"New Arrival",
        hasChildren:false,
    },
    {
        name:"Collections",
        hasChildren:true,
        children:[
            {
                name:"Pants",
                hasChildren:false,
                link:`/shop/pants`
            },
            {
                name:"T-Shirts",
                hasChildren:false,
                link:`/shop/t-shirts`
            },
            {
                name:"Shirts",
                hasChildren:false,
                link:`/shop/shirts`
            },
            {
                name:"Hoodies",
                hasChildren:false,
                link:`/shop/hoodies`
            },
        ]
    },
    {
        name:"About",
        hasChildren:false,
        link:`/about`
    },
    {
        name:"Contact Us",
        hasChildren:false,
        link:`contact-us`
    },
    {
        name:"Your Orders",
        hasChildren:false,
        link:`/user/orders`
    }
]