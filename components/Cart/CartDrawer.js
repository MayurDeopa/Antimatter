import { Drawer } from "material-gas-ui"

import useScreenWidth from "../../lib/drawer/customhooks/useScreenWidth"


const CartDrawer =({children,open,action,styles,position})=>{
    
    const {isMobileScreen} = useScreenWidth()

    if(isMobileScreen){
        return(
            <Drawer
                open={open}
                action={action}
                styles={{
                maxWidth:'100%',
                    height:'90%',
                        backgroundColor:'transparent',
                width:'100%'
                }}
                position='bottom'
            >
                {children}
            </Drawer>
        )
    }

    return (
        <Drawer
            open={open}
            action={action}
            styles={{
               maxWidth:'100%',
                backgroundColor:'transparent',
            }}
            position='right'
        >
            {children}
        </Drawer>
    )
}


export default CartDrawer