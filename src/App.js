
import './App.css';
import './estilo.css';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Contacts/>
      <Footer/>

    </div>
  );
}

export default App;
