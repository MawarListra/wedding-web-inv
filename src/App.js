
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
import { React, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import Dropdown from './Components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resized')
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
    <Navbar toggle={toggle} />
    <Dropdown  isOpen={isOpen} toggle={toggle}/>
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
