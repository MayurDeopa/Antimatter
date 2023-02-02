
import { Button } from "material-gas-ui";




export default function GasButton(props){

    const {
        href,
        text,
        action,
        disabled,
        loading,
        icon,
        type,
        variant,
        styles,
        rippleColor = 'var(--primary-theme-color)',
        rippleTimeout
    } = props


    

    return(
        <Button {...props} />
    )
}

