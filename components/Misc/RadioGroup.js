import MainContainer from "./MainContainer";
import RippleWrapper from './RippleWrapper'
import styles from '../../styles/form.module.css'

const RadioGroup =({state,handleChange,isChecked,name,action,containerWidth})=>{
    return(
            <MainContainer>
            {state.map((r,i)=>{
                return(
                    <div 
                        key={i}
                        className={styles.radio_container}>
                        <input
                            autoFocus
                            className={styles.radio}
                            type={'radio'}
                            value={r.id}
                            onChange={action}
                            /*checked={isChecked(r.name)}*/
                            name={name}
                            /*onChange={handleChange}*/
                            required
                        />
                        <p className={styles.radio_text}></p>
                        <span className={styles.radio_background}>{r.name}</span>
                    </div>
                )
            })}
        </MainContainer>
    )
}

export default RadioGroup;