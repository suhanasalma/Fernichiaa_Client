import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ info }) => {
   const {id,title,name,img,details,prev,next} = info
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full space-y-10 "
    >
      <div className="flex w-full justify-center items-center  gap-20 sm:flex-col lg:flex-row p-5">
        <div className="text-left space-y-5 ">
          <p className="text-xl">{title}</p>
          <h1 className="text-6xl">{name}</h1>
          <p>{details}</p>
          <Link to="/allproducts">
            <button className="btn bg-secondary border-0 text-white text-lg hover:text-secondary mt-10">
              Shop Now
            </button>
          </Link>
        </div>
        <img src={img} className="" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-secondary border-0"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-secondary border-0"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;