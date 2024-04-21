/* eslint-disable jsx-a11y/anchor-is-valid */
import menu_thumbnail from '../images/menu_thumbnail.svg'
import profile_thumbnail from '../images/profile_thumbnail.svg'
import styles from './Menu.module.css'

function Menu(){
    return(
        <div className={styles.menu}>
            <a href='#'>Gmail</a>
            <a href='#'>Imagens</a>
            <a href='#'><img src={menu_thumbnail} className={styles.resize} alt='Menu'></img></a>
            <a href='#'><img src={profile_thumbnail} alt='Perfil'></img></a>
        </div>
    )
}

export default Menu