import Form from '../Misc/Form'
import Modal from '../Misc/Modal'

const FunctionalModalForm =({hook,title,children})=>{
    return(
        <Modal states={{
            hook:hook
        }}>
            <Form 
                title={title}
                animated={true}
            >
                {children}
            </Form>
        </Modal>
    )
}

export default FunctionalModalForm;