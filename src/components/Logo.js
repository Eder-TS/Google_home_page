import logo from '../images/logo.svg'
import styles from './Logo.module.css'

function Logo(){
    return(
        <div className={styles.logo}>
            <img src={logo} className={styles.resize} alt='Logo'></img>
        </div>
    )
}

export default Logo