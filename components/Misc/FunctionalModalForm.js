import Form from '../Misc/Form'
import Modal from '../Misc/Modal'

const FunctionalModalForm =({states,children})=>{
    return(
        <Modal states={{
            hook:states?.hook || null
        }}>
            <Form card={{
                title:states.title,
                animated:true
            }}>
                {children}
            </Form>
        </Modal>
    )
}

export default FunctionalModalForm;