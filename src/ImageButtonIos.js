import React from 'react';
import iosLogo from './iosLogo.svg';

function ImageButtonIos() {
    const handleButtonClick = () => {
      alert('Кнопка IOS нажата!');
      // Другие действия при нажатии на кнопку
    };
  
    return (
      <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src={iosLogo} alt="Button" style={{ width: '100px', height: '100px' }} />
      </button>
    );
  }
  
  export default ImageButtonIos;