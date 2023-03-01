import './App.scss';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portafolio from './Components/Portafolio/Portafolio';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import {themeContext} from './Context'
import { useContext } from 'react';

function App() {

  const theme  = useContext (themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{
      background : darkMode ? 'black' : '',
      color: darkMode ? 'white' : '',
    }}>
      <Navbar />
      <Intro />
      <Services /> 
      <Experience />
      <Works />
      <Portafolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
