import Menu from './components/Menu';
import Logo from './components/Logo';
import Form from './components/Form';
import Privacity from './components/Privacity';
import Footer from './components/Footer';
import styles from './components/App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Menu/>
      
      <section>
        <Logo/>

        <Form/>

        <Privacity/>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
