/* eslint-disable jsx-a11y/anchor-is-valid */
import schield from '../images/schield.svg'
import styles from './Privacity.module.css'

function Privacity(){
    return(
        <div className={styles.privacity}>
            <img src={schield} alt='Privacidade'></img>
            <a href='#'>Faça o Check-up de privacidade</a>
        </div>
        
    )
}

export default Privacity