import { Card } from "material-gas-ui"


const Policy =({title,children})=>{
    return(
        <Card styles={{color:'var(--primary-text-color)',boxShadow:'none',padding:'10px',maxWidth:'60rem',flexDirection:'column',gap:'1rem'}}>
            <h1>{title}</h1>
            {children}
        </Card>
    )
}

export default Policy;