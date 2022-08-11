import useRipple from 'useripple'

const RippleWrapper =({children})=>{
    const [addRipple,ripples] = useRipple()

    return(
        <div
            style={{
                position:'relative',
                overflow:'hidden'
            }}
            onClick={addRipple}
        >
            {children}
            {ripples}
        </div>
    )
}

export default RippleWrapper;