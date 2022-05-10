import { useStore } from "../../lib/drawer/context/StoreContext"
import Modal from "./Modal"


const ToastContainer =()=>{
    const {toastState} = useStore()
    const [toasts,setToasts] = toastState
    if(toasts.length){
        return(
            <Modal>

            </Modal>
        )
    }
    else{
        return;
    }
}

export default ToastContainer;