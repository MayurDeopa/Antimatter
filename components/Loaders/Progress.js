import { Portal, Spinner, useTransition } from 'material-gas-ui';
import Modal from '../Misc/Modal';
import LinearIndefiniteProgress from './LinearIndefiniteProgress';


const Progress =({visible})=>{

    let modalContentStyles ={
        backgroundColor:'var(--secondary-theme-color)',
        padding:'1rem',
        borderRadius:'16px',
        width:'15rem',
        maxWidth:'90%',
        height:'5rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    }

    const hasTransitioned = useTransition(visible,400)

    return(
        hasTransitioned && (
            <Portal>
                <Modal open={visible}>
                    <span style={modalContentStyles}>
                       {Math.random()>0.5? <LinearIndefiniteProgress/>:<div style={{display:'flex',justifyContent:'center'}}><Spinner size={40} color='black'/></div>}
                    </span>
                </Modal>
            </Portal>
        )
    )

}

export default Progress;