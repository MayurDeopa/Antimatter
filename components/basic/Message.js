import {BiError,BiRocket,BiInfoCircle} from 'react-icons/bi'
import colors from '../../styles/colors.module.css'

const Message =({states})=>{
    const {message,type} = states
    switch(type){
        case "success":
            return (
                <div className="message_wrapper">
                    <div className={`message_bar ${colors.success_background}`}/>
                    <div className={`svg_wrapper ${colors.success_color}`}>
                        <BiRocket/>
                    </div>
                    <p>{message}</p>
                </div>
            )
        case "failed":
            return (
                <div className="message_wrapper">
                    <div className={`message_bar ${colors.error_background}`}/>
                    <div className={`svg_wrapper ${colors.error_color}`}>
                        <BiError/>
                    </div>
                    <p>{message || "Something went wrong"}</p>
                </div>
            )
        case "info":
            return (
                <div className="message_wrapper">
                    <div className={`message_bar ${colors.info_background}`}/>
                    <div className={`svg_wrapper ${colors.info_color}`}>
                        <BiInfoCircle/>
                    </div>
                    <p>{message}</p>
                </div>
            )
    }
}

export default Message;