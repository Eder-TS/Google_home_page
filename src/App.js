import Menu from './components/Menu';
import Logo from './components/Logo';
import Search from './components/Search';
import ButtonSearch from './components/ButtonSearch';
import ButtonLucky from './components/ButtonLucky';
import Privacity from './components/Privacity';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Menu/>
      </div>
      
      <div>
        <Logo/>
      </div>

      <div>
        <Search/>
      </div>

      <div>
        <ButtonSearch/>
        <ButtonLucky/>
      </div>

      <div>
        <Privacity/>
      </div>

      <div>
        <Country/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
