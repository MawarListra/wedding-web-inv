import React from 'react';
import Countdown from '../Components/Countdown';
import CurchQuotes from '../Components/CurchQuotes';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import GroomBride from '../Components/GroomBride';
import Kado from '../Components/Kado';
import Landing from '../Components/Landing';
import Pemberkatan from '../Components/Pemberkatan';
import Protokol from '../Components/Protokol';
import SendingWishes from '../Components/SendingWishes';
import Wishes from '../Components/Wishes';

function index(props) {
    return (
        <div>
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
        </div>
    );
}

export default index;