import Panel from "../Panel"
import Modal from "../Misc/Modal"
import PrimaryLoader from './PrimarySpinner'



const ModalSpinner =()=>{
    return (
        <Modal>
            <Panel attributes={{
                radius:'50%',
                padding:'0.3rem'
            }}>
                <PrimaryLoader states={{
                    light:false
                }}
                size={'m'}/>
            </Panel>
        </Modal>
    )
}

export default ModalSpinner;