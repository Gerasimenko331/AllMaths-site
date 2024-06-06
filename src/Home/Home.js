import React from 'react';
import Header from '/Users/frontend/AllMaths-site/src/Home/Header/Header.js';
import Greeting from '/Users/frontend/AllMaths-site/src/Home/Greeting/Greeting.js';
import Info from '/Users/frontend/AllMaths-site/src/Home/Info/Info.js';
import Conclusion from '/Users/frontend/AllMaths-site/src/Home/Conclusion/Conclusion.js';

const Home = () => {
   return (
      <div>
        <Header />
        <Greeting />
        <Info />
        <Conclusion />
      </div>
   );
}

export default Home;