import React from 'react';
import androidLogo from '/Users/frontend/AllMaths-site/src/assets/androidLogo.svg';
import './button.css';
import './logos.css';

function ImageButtonAndroid() {
    const handleButtonClick = () => {
      // alert('Кнопка ANDROID нажата!');
      // Другие действия при нажатии на кнопку
      const url = 'https://apps.apple.com/ru/app/all-maths-%D0%B2%D1%81%D1%8F-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0/id1553690815';
      window.open(url, '_blank');
    };
  
    return (
      <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src={androidLogo} alt="Button" class="logos" onClick={handleButtonClick} />
      </button>
    );
  }
  
  export default ImageButtonAndroid;