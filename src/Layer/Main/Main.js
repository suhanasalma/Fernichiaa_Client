import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/SharedPages/Footer/Footer';
import Header from '../../Pages/SharedPages/Header/Header';

const Main = () => {
   return (
      <div>
         <Header/>
         <Outlet></Outlet>
         <Footer/>
      </div>
   );
};

export default Main;