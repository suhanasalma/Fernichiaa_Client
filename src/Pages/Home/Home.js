import React from 'react';
import Categories from './Category/Categories';
// import Categories from './Category/Categories';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
   return (
      <div>
         <HomeBanner/>
         <Categories/>
      </div>
   );
};

export default Home;