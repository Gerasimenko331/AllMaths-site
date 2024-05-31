import React from 'react';
import androidLogo from './androidLogo.svg';

function ImageButtonAndroid() {
    const handleButtonClick = () => {
      alert('Кнопка ANDROID нажата!');
      // Другие действия при нажатии на кнопку
    };
  
    return (
      <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src={androidLogo} alt="Button" style={{ width: '100px', height: '100px' }} />
      </button>
    );
  }
  
  export default ImageButtonAndroid;