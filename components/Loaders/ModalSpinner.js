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
                }}/>
            </Panel>
        </Modal>
    )
}

export default ModalSpinner;