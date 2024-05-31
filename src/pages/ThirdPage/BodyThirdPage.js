import React from 'react';

   const BodyThirdPage = () => {
       const pageStyle = {
           background: 'linear-gradient(to bottom, #CEE7F5, #096B92)', // Градиентный фон
           height: '100vh',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
       };

       return (
           <div style={pageStyle}>
               <h1 style={{ color: '#fff' }}>Это градиентная страница</h1>
           </div>
       );
   }

   export default BodyThirdPage;