import { Button, Container, Drawer } from "material-gas-ui";
import Image from "next/image";


const SizeChart =({open,toggle})=>{
    return(
        <Drawer
            open={open}
            action={toggle}
            styles={{
                backgroundColor:'black',
                color:'var(--primary-text-color)',
                width:'100%',
                height:'80%'
            }}
            position='bottom'
        >
            <Container styles={{
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
            }}>
                <Container
                    styles={{
                        width:'40rem',
                        maxWidth:'100%',
                        flexDirection:'column',
                        alignItems:'center',
                        position:'relative'
                    }}
                >
                    <Image
                        src={'https://i.ibb.co/bRVgg6F/SIZES2.jpg'}
                        height={650}
                        width={1000}
                    />
                </Container>
                <Button action={toggle} text='Close' styles={{backgroundColor:'transparent'}} rippleColor='white'/>
            </Container>
        </Drawer>
    )
}


export default SizeChart;