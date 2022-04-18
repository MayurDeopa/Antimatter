import PrimaryLoader from "./PrimaryLoader"
import colors from '../../styles/colors.module.css'


const AwaitButton =({states,children})=>{
    const {awaitState,text,action} = states
    switch(awaitState){
        case "loading":
                return (
                    <div className="await_button">
                        <h3>
                            {text}
                        </h3>
                        {children}
                        <PrimaryLoader states={{
                            light:true
                        }}/>
                    </div>
                )
        case "disabled":
                return (
                    <div className="await_button">
                        <h3>
                            {text}
                        </h3>
                        {children}
                    </div>
                )
        case "none":
            return (
                <div 
                className="checkout_button"
                onClick={action?action:null}
                >
                    <h3>
                        {text}
                    </h3>
                    {children}
                </div>
            )
        default:
            return (
                <div 
                className="checkout_button"
                onClick={action?action:null}
                >
                    <h3>
                        {text}
                    </h3>
                    {children}
                </div>
            )
        }
    }

    

export default AwaitButton;