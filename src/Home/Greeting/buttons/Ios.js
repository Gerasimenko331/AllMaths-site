import React from 'react';
import iosLogo from 'src/assets/iosLogo.svg';
import './button.css';
import './logos.css';

function ImageButtonIos() {
    const handleButtonClick = () => {
      //alert('Кнопка IOS нажата!');
      // Другие действия при нажатии на кнопку
      const url = 'https://apps.apple.com/ru/app/all-maths-%D0%B2%D1%81%D1%8F-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0/id1553690815';
      window.open(url, '_blank');
    };
  
    return (
      <button onClick={handleButtonClick} className='buttonLogo'>
        <img src={iosLogo} alt="Button" className="logos" onClick={handleButtonClick} />
      </button>
    );
  }
  
  export default ImageButtonIos;