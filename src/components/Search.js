/* eslint-disable jsx-a11y/anchor-is-valid */
import magnifier from '../images/magnifier.svg'
import keyboard from '../images/keyboard.svg'
import microphone from '../images/microphone.svg'

function Search(){
    return(
        <div>
            <a href='#'><img src={magnifier} alt='Pesquisar'></img></a>
            <input type='text'></input>
            <a href='#'><img src={keyboard} alt='Teclado'></img></a>
            <a href='#'><img src={microphone} alt='Pesquisa por voz'></img></a>
        </div>
    )
}

export default Search