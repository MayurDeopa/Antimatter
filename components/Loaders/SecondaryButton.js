import PrimarySpinner from "./PrimarySpinner"
import styles from '../../styles/buttons.module.css'


const Button =({awaitState,text,action,secondary,loadingText,icon,children,type,cssClasses,width})=>{
    switch(awaitState){
        case "loading":
                return (
                    <div 
                        style={{
                            width:width
                        }}
                        className={`${styles.secondary_await}`}
                        
                        >
                        <h4>
                            {loadingText?loadingText:text}
                        </h4>
                        {children}
                        <PrimarySpinner 
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
                <button 
                    type={type || "button"}
                    style={{
                        width:width
                    }}
                    className={styles.secondary_button}
                    onClick={action}
                >
                    <h4>
                        {text}
                    </h4>
                    {icon}
                    {children}
                </button>
            )
        }
    }

    

export default Button;