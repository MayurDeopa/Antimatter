import PrimarySpinner from "./PrimarySpinner"
import styles from '../../styles/buttons.module.css'


const Button =({awaitState,text,action,loadingText,icon,children,cssClasses,width})=>{
    switch(awaitState){
        case "loading":
                return (
                    <button 
                        style={{
                            width:width
                        }}
                        className={styles.primary_await}
                        
                        >
                        <p>
                            {loadingText?loadingText:text}
                        </p>
                        {children}
                        <PrimarySpinner 
                            light
                            size={'s'}
                        />
                    </button>
                )
        case "disabled":
                return (
                    <div 
                        style={{
                            width:width
                        }}
                        className={styles.primary_await}>
                        <p>
                            {text}
                        </p>
                        {icon}
                        {children}
                    </div>
                )
        default:
            return (
                <button 
                    type={'submit'}
                    style={{
                        width:width
                    }}
                    className={`${styles.primary_button} ${cssClasses}`}
                    onClick={action}
                >
                    <p>
                        {text}
                    </p>
                    {icon}
                    {children}
                </button>
            )
        }
    }

    

export default Button;