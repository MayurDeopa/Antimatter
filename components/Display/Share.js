

import FunctionalModalForm from "../Misc/FunctionalModalForm"
import OptInput from "../Misc/OptInput"


const Share=({link,shareIcons,toggleModal})=>{
    return(
        <FunctionalModalForm 
            maxWidth={'30rem'}
            title={'Share'}
            hook={toggleModal}
        >
            <OptInput
                isValid
                disabled
                value={link}
                placeholder={'Link'}
            />
            <div style={{
                display:'flex',
                justifyContent:'space-around',
                width:'100%'
            }}>
                                
                {shareIcons.map((s,i)=>{
                return (
                    <s.button
                        url={s.url}
                        key={i}
                    >
                        <s.icon size={34} round/>
                    </s.button>
                )
            })}
            </div>
        </FunctionalModalForm>
    )
}

export default Share;