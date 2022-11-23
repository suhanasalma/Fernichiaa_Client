import React from 'react';
import img1 from "../../../Assets/category/1.png";
import img2 from "../../../Assets/category/2.png";
import img3 from "../../../Assets/category/3.png";
import img4 from "../../../Assets/category/4.png";
import img5 from "../../../Assets/category/5.png";
import Category from './Category';

const Categories = () => {
      const categories = [
        {
          title: "Bedroom",
          img: img1,
        },
        {
          title: "Living",
          img: img2,
        },
        {
          title: "Dining",
          img: img3,
        },
        {
          title: "Lounge",
          img: img4,
        },
        {
          title: "office Chair",
          img: img5,
        },
      ];
   return (
      <div>
         {
            categories.map(category=><Category category ={category}></Category>)
         }
      </div>
   );
};

export default Categories;