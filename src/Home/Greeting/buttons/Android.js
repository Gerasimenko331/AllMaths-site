import React from 'react';
import androidLogo from '/Users/frontend/AllMaths-site/src/assets/androidLogo.svg';
import './button.css';
import './logos.css';

function ImageButtonAndroid() {
    const handleButtonClick = () => {
      // alert('Кнопка ANDROID нажата!');
      // Другие действия при нажатии на кнопку
      const url = 'https://play.google.com/store/apps/details?id=com.allmaths';
      window.open(url, '_blank');
    };
  
    return (
      <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src={androidLogo} alt="Button" class="logos" onClick={handleButtonClick} />
      </button>
    );
  }
  
  export default ImageButtonAndroid;