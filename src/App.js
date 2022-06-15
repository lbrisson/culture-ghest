
import './App.css';
import Footer from './components/footer/Footer.jsx';
import HeroBanner from './components/heroBanner/HeroBanner.jsx';
import SearchNavBar from './components/SearchNavBar.jsx/SearchNavBar.jsx';
import MediaControlCard from './components/mediaCards/MediaControlCard.jsx';
import DescriptionAlerts from './components/alerts/DescriptionAlerts.jsx';
import LandingPage from './components/LandingPage.jsx';
import React from 'react';

function App() {
  // const [data, setData] = React.useState(null);

  return (
    <div className="App">
      <LandingPage />
        {/* <SearchNavBar /> */}
        {/* <HeroBanner /> */}
        {/* <MediaControlCard /> */}
      {/* <DescriptionAlerts /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
