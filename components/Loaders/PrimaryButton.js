import PrimarySpinner from "./PrimarySpinner"
import ButtonWrapper from "./BtnRipples"

import styles from '../../styles/buttons.module.css'




const Button =({awaitState,text,action,loadingText,icon,children,cssClasses,width,type})=>{

    
    switch(awaitState){
        case "loading":
                return (
                    <ButtonWrapper
                        width={width}
                    >
                        <button 
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
                    </ButtonWrapper>
                )
        case "disabled":
                return (
                    <ButtonWrapper
                        width={width}
                    >
                        <div 
                        className={styles.primary_await}>
                        {
                            text
                            &&
                            <p>
                                {text}
                            </p>
                        }
                        {icon}
                        {children}
                    </div>
                    </ButtonWrapper>
                )
        default:
            return (
                <ButtonWrapper
                    width={width}
                    color={'var(--secondary-theme-lighter)'}
                >
                    <button 
                    type={type || 'button'}
                    className={`${styles.primary_button} ${cssClasses}`}
                    onClick={action}
                >
                    <p>
                        {text}
                    </p>
                    {awaitState==='loading'?<PrimarySpinner light
                            size={'s'}/>:icon}
                    {children}
                </button>
                </ButtonWrapper>
            )
        }
    }

    

export default Button;