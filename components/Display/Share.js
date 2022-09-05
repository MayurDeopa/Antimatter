

import FunctionalModalForm from "../Misc/FunctionalModalForm"
import OptInput from "../Misc/OptInput"
import Portal from "../Portal";


const Share=({link,shareIcons,toggleModal,visible})=>{
    return(
        <Portal
            container={'modal-root'}
        >
            <FunctionalModalForm 
                visible={visible}
                maxWidth={'30rem'}
                title={'Share'}
                hook={toggleModal}
            >
                <OptInput
                    isValid
                    
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
        </Portal>
    )
}

export default Share;