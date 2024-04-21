import ButtonSearch from './ButtonSearch';
import ButtonLucky from './ButtonLucky';
import styles from './Buttons.module.css'

function Buttons(){
    return(
        <div className={styles.buttons}>
          <ButtonSearch/>
          <ButtonLucky/>
        </div>
    )
}

export default Buttons