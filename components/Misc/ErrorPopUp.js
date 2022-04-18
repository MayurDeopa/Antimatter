import Modal from "./Modal";
import Form from "./Form";

const ErrorPopUp =({children})=>{
    return (
        <Modal>
            <Form card={{
                title:"Error",
                animated:true
                }}>
                    {children}
            </Form>
        </Modal>
    )
}

export default ErrorPopUp;