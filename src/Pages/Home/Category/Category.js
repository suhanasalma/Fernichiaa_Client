import React from 'react';


const Category = ({ category }) => {
  const { name, img } = category;

  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={img} />
      </div>
    </div>
  );
};

export default Category;