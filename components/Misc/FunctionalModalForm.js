import Form from '../Misc/Form'
import Modal from '../Misc/Modal'

const FunctionalModalForm =({hook,title,children,maxWidth})=>{
    return(
        <Modal 
            hook={hook}
        >
            <Form 
                maxWidth={maxWidth}
                title={title}
                animated={true}
            >
                {children}
            </Form>
        </Modal>
    )
}

export default FunctionalModalForm;