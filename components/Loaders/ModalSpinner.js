import Panel from "../Panel"
import Modal from "../Misc/Modal"
import PrimaryLoader from './PrimarySpinner'



const ModalSpinner =()=>{
    return (
        <Modal>
            <Panel 
            radius={'50%'}
            padding={'0.3rem'}
            shadow={'var(--primary-box-shadow)'}
            >
                <PrimaryLoader states={{
                    light:false
                }}
                size={'m'}/>
            </Panel>
        </Modal>
    )
}

export default ModalSpinner;