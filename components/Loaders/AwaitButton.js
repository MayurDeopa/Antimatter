import PrimaryLoader from "./PrimaryLoader"
import styles from '../../styles/buttons.module.css'


const AwaitButton =({states,children})=>{
    const {awaitState,text,action,secondary} = states
    switch(awaitState){
        case "loading":
                return (
                    <div className={styles.await_button}>
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
                    <div className={styles.await_button}>
                        <h3>
                            {text}
                        </h3>
                        {children}
                    </div>
                )
        default:
            return (
                <div 
                className={!secondary?styles.primary_button:styles.secondary_button}
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