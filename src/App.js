
import './App.css';
import './estilo.css';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Search from './Components/Search/Search';
import Descuento from './Components/Descuento/Descuento';
import Slider from './Components/Slider/Slider';
import Mediosp from './Components/Mediosp/Mediosp';
import Targets from './Components/Targets/Targets';
import Pago from './Components/Pago/Pago';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Descuento/>
      <Slider/>
      <AboutUs/>
      <Targets/>
      <Mediosp/>
      <Contacts/>
      <Pago/>
      <Footer/>

    </div>
  );
}

export default App;
