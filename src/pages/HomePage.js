import React from 'react';
import Header from './GreetingPage/Header/Header';
import BodyGreetingPage from './GreetingPage/Body/BodyGreetingPage';
import BodyInfoPage from './InfoPage/BodyInfoPage';
import BodyConclusionPage from './ConclusionPage/BodyConclusionPage';
import Footer from './ConclusionPage/Footer/Footer';

const HomePage = () => {
   return (
      <div>
        <Header />
        <BodyGreetingPage />
        <BodyInfoPage />
        <BodyConclusionPage />
        <Footer />
      </div>
   );
}

export default HomePage;