import PrimarySpinner from "./PrimarySpinner"
import styles from '../../styles/buttons.module.css'


const Button =({awaitState,text,action,loadingText,icon,children,cssClasses,width})=>{
    switch(awaitState){
        case "loading":
                return (
                    <div 
                        style={{
                            width:width
                        }}
                        className={styles.primary_await}
                        
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
                        className={styles.primary_await}>
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
                    className={`${styles.primary_button} ${cssClasses}`}
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

    

export default Button;