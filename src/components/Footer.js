/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Country from './Country'
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <Country/>
            
            <div className={styles.lowerrow}>
                <div className={styles.littlescreen}>
                    <a href='#' className={styles.links}>Sobre</a>
                    <a href='#' className={styles.links}>Publicidade</a>
                    <a href='#' className={styles.links}>Negócios</a>
                    <a href='#' className={styles.links}>Como funciona a Pesquisa</a>
                </div>

                <div className={styles.littlescreen}>
                    <div className={styles.right}>
                    <a href='#' className={styles.links}>Privacidade</a>
                    <a href='#' className={styles.links}>Termos</a>
                    <a href='#' className={styles.links}>Configurações</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer