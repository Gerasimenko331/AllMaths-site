import React from 'react';
import Header from './Header';
import BodyFirstPage from './BodyFirstPage';
import BodySecondPage from './BodySecondPage';
import BodyThirdPage from './BodyThirdPage';

const HomePage = () => {
   return (
      <div>
        <Header />
        <BodyFirstPage />
        <BodySecondPage />
        <BodyThirdPage />
      </div>
   );
}

export default HomePage;