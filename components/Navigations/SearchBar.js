import styles from '../../styles/Search.module.css'

const SearchBar =()=>{
    return(
        <div className={styles.wrapper}>
            <input 
                type='search' 
                placeholder={'Search'} 
                required 
                className={styles.input}/>
        </div>
    )
}

export default SearchBar;