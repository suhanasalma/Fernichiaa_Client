import React from 'react';
import img1 from '../../../Assets/Information/1.png'
import img2 from '../../../Assets/Information/2.png'
import img3 from '../../../Assets/Information/3.png'
import Information from './Information';

const Informations = () => {
   const informations = [
      {
         title:"You can decide how you can pick order",
         desc:'Think before you order',
         icon:img1
      },
      {
         title:"Call Support",
         desc:'Instant access to support',
         icon:img2
      },
      {
         title:"100% Secure Payment",
         desc:'We ensure secure payment!',
         icon:img3
      },
   ]
   return (
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-20'>
         {
            informations.map(information=><Information information={information}></Information>)
         }
      </div>
   );
};

export default Informations;