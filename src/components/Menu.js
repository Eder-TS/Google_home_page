/* eslint-disable jsx-a11y/anchor-is-valid */
import menu_thumbnail from '../images/menu_thumbnail.svg'
import profile_thumbnail from '../images/profile_thumbnail.svg'

function Menu(){
    return(
        <>
            <a href='#'>Gmail</a>
            <a href='#'>Imagens</a>
            <a href='#'><img src={menu_thumbnail} alt='Menu'></img></a>
            <a href='#'><img src={profile_thumbnail} alt='Perfil'></img></a>
        </>
    )
}

export default Menu