import React from 'react';
import { Link } from 'react-router-dom';



const Category = ({ categoryy }) => {
  const { category, img ,code} = categoryy;


  return (
    <div className="w-48 h-48 text-center border-neutral hover:border-secondary rounded-full mx-auto  hover:border-dashed	border-4">
      <Link to={`categories/${code}`}>
        <div className="flex flex-col justify-center items-center h-full space-y-3">
          <img src={img} className="" />
          <p className="">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Category;