import React from 'react';
import androidLogo from 'src/assets/androidLogo.svg';
import './button.css';
import './logos.css';

function ImageButtonAndroid() {
    const handleButtonClick = () => {
      const url = 'https://play.google.com/store/apps/details?id=com.allmaths';
      window.open(url, '_blank');
    };
  
    return (
      <button onClick={handleButtonClick} className='buttonLogo'>
        <img src={androidLogo} alt="Button" className="logos" onClick={handleButtonClick} />
      </button>
    );
  }
  
  export default ImageButtonAndroid;