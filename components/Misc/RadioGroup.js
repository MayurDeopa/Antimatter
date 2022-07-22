import MainContainer from "./MainContainer";

import styles from '../../styles/form.module.css'

const RadioGroup =({state,handleChange,isChecked,name})=>{
    return(
        <MainContainer>
            {state.map((r,i)=>{
                return(
                    <div 
                        key={i}
                        className={styles.radio_container}>
                        <input
                            className={styles.radio}
                            type={'radio'}
                            value={r.name}
                            checked={isChecked(r.name)}
                            name={r.name}
                            onChange={handleChange}
                            required
                        />
                        <p className={styles.radio_text}>{r.name}</p>
                    </div>
                )
            })}
        </MainContainer>
    )
}

export default RadioGroup;