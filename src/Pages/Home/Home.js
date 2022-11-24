import React from 'react';
import AdminPannel from '../AdminPannel/AdminPannel';
import Advertisements from './Advertisements/Advertisements/Advertisements';
import Categories from './Category/Categories';
// import Categories from './Category/Categories';
import HomeBanner from './HomeBanner/HomeBanner';
import Informations from './Informations/Informations';

const Home = () => {
   return (
      <div>
         <HomeBanner/>
         <Categories/>
         <Advertisements/>
         <Informations/>
         <AdminPannel/>
      </div>
   );
};

export default Home;