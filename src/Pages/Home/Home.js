import React from 'react';
import useTitle from '../../Hooks/useTitle';
import AdminCard from './AdminCard/AdminCard';
import Advertisements from './Advertisements/Advertisements/Advertisements';
import Categories from './Category/Categories';
// import Categories from './Category/Categories';
import HomeBanner from './HomeBanner/HomeBanner';
import Informations from './Informations/Informations';

const Home = () => {
   useTitle("home");
   return (
      <div className=''>
         <HomeBanner/>
         <Categories/>
         <Advertisements/>
         <Informations/>
         <AdminCard/>
      </div>
   );
};

export default Home;