
import './App.css';
import Landing from './Components/Landing';
import CurchQuotes from './Components/CurchQuotes';
import GroomBride from './Components/GroomBride';
import Countdown from './Components/Countdown';
import Pemberkatan from './Components/Pemberkatan';
import Protokol from './Components/Protokol';
import Kado from './Components/Kado';
import SendingWishes from './Components/SendingWishes';
import Wishes from './Components/Wishes';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import { React} from 'react';

function App() {
  return (
    <>
    <Landing />
    <CurchQuotes />
    <GroomBride />
    <Countdown />
    <Pemberkatan />
    <Protokol />
    <Kado />
    <SendingWishes />
    <Wishes />
    <Gallery />
    <Footer />
    </>
  );
}

export default App;
