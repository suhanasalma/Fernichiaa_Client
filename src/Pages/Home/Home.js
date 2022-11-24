import React from 'react';
import Advertisements from './Advertisements/Advertisements/Advertisements';
import Categories from './Category/Categories';
// import Categories from './Category/Categories';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
   return (
      <div>
         <HomeBanner/>
         <Categories/>
         <Advertisements/>
      </div>
   );
};

export default Home;