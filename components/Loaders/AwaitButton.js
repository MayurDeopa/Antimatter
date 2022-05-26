import PrimarySpinner from "./PrimarySpinner"
import styles from '../../styles/buttons.module.css'


const AwaitButton =({awaitState,text,action,secondary,loadingText,icon,children,cssClasses,width})=>{
    switch(awaitState){
        case "loading":
                return (
                    <div 
                        style={{
                            width:width
                        }}
                        className={styles.await_button}
                        
                        >
                        <h4>
                            {loadingText?loadingText:text}
                        </h4>
                        {children}
                        <PrimarySpinner 
                            light
                            size={'s'}
                        />
                    </div>
                )
        case "disabled":
                return (
                    <div 
                        style={{
                            width:width
                        }}
                        className={styles.disabled}>
                        <h4>
                            {text}
                        </h4>
                        {icon}
                        {children}
                    </div>
                )
        default:
            return (
                <div 
                    style={{
                        width:width
                    }}
                    className={!secondary?`${styles.primary_button} ${cssClasses}`:styles.secondary_button}
                    onClick={action}
                >
                    <h4>
                        {text}
                    </h4>
                    {icon}
                    {children}
                </div>
            )
        }
    }

    

export default AwaitButton;