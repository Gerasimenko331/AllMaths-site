import React from 'react';
import Header from 'src/Home/Header/Header.js';
import Greeting from 'src/Home/Greeting/Greeting.js';
import Info from 'src/Home/Info/Info.js';
import Conclusion from 'src/Home/Conclusion/Conclusion.js';

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