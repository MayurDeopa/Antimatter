import MainContainer from "./MainContainer";

import styles from '../../styles/form.module.css'

const RadioGroup =({state,handleChange,isChecked})=>{
    return(
        <MainContainer>
            {state.map((r,i)=>{
                return(
                    <label 
                        key={i}
                        className={styles.radio_container}>
                        <input
                            className={styles.radio}
                            type={'radio'}
                            value={r.title}
                            checked={isChecked(r.title)}
                            onChange={handleChange}
                        />
                        <p className={styles.radio_text}>{r.icon}</p>
                    </label>
                )
            })}
        </MainContainer>
    )
}

export default RadioGroup;