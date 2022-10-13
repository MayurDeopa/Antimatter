import { Container, Drawer } from "material-gas-ui";
import PrimarySpinner from "../Loaders/PrimarySpinner";
import Skeleton from "../Loaders/Skeleton";
import AntiMatterLogo from "./AntiMatterLogo";


const SizeChart =({open,toggle})=>{
    return(
        <Drawer
            open={open}
            action={toggle}
            styles={{
                backgroundColor:'var(--secondary-theme-color)',
                color:'var(--primary-text-color)',
                width:'100%',
                height:'40rem',
                maxHeight:'80%'
            }}
            position='bottom'
        >
            <Container styles={{
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Container
                    styles={{
                        width:'40rem',
                        maxWidth:'100%',
                        flexDirection:'column',
                        alignItems:'center'
                    }}
                >
                    <AntiMatterLogo size={45} animated/>
                </Container>
            </Container>
        </Drawer>
    )
}


export default SizeChart;