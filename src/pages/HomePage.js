import React from 'react';
import Header from './FirstPage/Header/Header';
import BodyFirstPage from './FirstPage/Body/BodyFirstPage';
import BodySecondPage from './SecondPage/BodySecondPage';
import BodyThirdPage from './ThirdPage/BodyThirdPage';

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