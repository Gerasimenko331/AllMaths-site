import React from 'react';
import Header from './GreetingPage/Header/Header';
import BodyGreetingPage from './GreetingPage/Body/BodyGreetingPage';
import BodyInfoPage from './InfoPage/BodyInfoPage';
import BodyConclusionPage from './ConclusionPage/BodyConclusionPage';

const HomePage = () => {
   return (
      <div>
        <Header />
        <BodyGreetingPage />
        <BodyInfoPage />
        <BodyConclusionPage />
      </div>
   );
}

export default HomePage;