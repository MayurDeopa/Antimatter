import PrimarySpinner from "./PrimarySpinner"
import styles from '../../styles/buttons.module.css'
import ButtonWrapper from "./BtnRipples"


const Button =({awaitState,text,action,secondary,loadingText,icon,children,type,cssClasses,width})=>{
    switch(awaitState){
        case "loading":
                return (
                    <ButtonWrapper
                        width={width}
                    >
                        <div 
                        style={{width:width}}
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
                    </ButtonWrapper>
                )
        case "disabled":
                return (
                    <ButtonWrapper
                        width={width}
                    >
                        <div 
                        className={styles.disabled}>
                        <h4>
                            {text}
                        </h4>
                        {icon}
                        {children}
                    </div>
                    </ButtonWrapper>
                )
        default:
            return (
                <ButtonWrapper
                    color={'var(--primary-color-light)'}
                    width={width}
                >
                    <button 
                    type={type || "button"}             
                    className={styles.secondary_button}
                    onClick={action}
                >
                    <h4>
                        {text}
                    </h4>
                    {icon}
                    {children}
                </button>
                </ButtonWrapper>
            )
        }
    }

    

export default Button;