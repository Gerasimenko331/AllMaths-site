import React from 'react';
import phoneIcon from '/Users/frontend/AllMaths-site/src/assets/phone.svg';
import mailIcon from '/Users/frontend/AllMaths-site/src/assets/mail.svg';
import vkIcon from '/Users/frontend/AllMaths-site/src/assets/vk.svg';

const Footer = () => {
    return (
        <footer style={{ position: 'fixed', bottom: 0, right: 0, padding: '10px', backgroundColor: '#333' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="#"><img src={phoneIcon} alt="" style={{ width: '30px', height: '30px', marginLeft: '10px', textDecoration: 'none', color: '#fff' }} /></a>
                <a href="#"><img src={mailIcon} alt="" style={{ width: '30px', height: '30px', marginLeft: '10px', textDecoration: 'none', color: '#fff' }} /></a>
                <a href="#"><img src={vkIcon} alt="" style={{ width: '30px', height: '30px', marginLeft: '10px', textDecoration: 'none', color: '#fff' }} /></a>
            </div>
        </footer>
    );
}

export default Footer;