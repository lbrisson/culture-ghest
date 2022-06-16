
import './App.css';
import Footer from './components/footer/Footer.jsx';
import HeroBanner from './components/heroBanner/HeroBanner.jsx';
import DescriptionAlerts from './components/alerts/DescriptionAlerts.jsx';
import LandingPage from './components/LandingPage.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import SpotifyLogin from "./components/SpotifyLogin.js";
import Home from "./components/Home.jsx";


const code = new URLSearchParams(window.location.search).get('code');
console.log(code);
function App() {
     return code ? <Home code={code} /> : <SpotifyLogin />

}

export default App;
