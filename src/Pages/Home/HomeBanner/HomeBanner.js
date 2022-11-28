import React from "react";
import hero1 from "../../../Assets/Hero/hero1.jpg";
import hero2 from "../../../Assets/Hero/hero2.jpg";
import Banner from "./Banner";

const HomeBanner = () => {
  const infos = [
    {
      title: "Old products but as new",
      name: "Flexible Chair",
      details:
        "You can find your desire furniture in good condition in your budget",
      id: 1,
      prev: 2,
      next: 2,
      img: hero1,
    },
    {
      title: "Old products but as new",
      name: "Flexible Chair",
      details:
        "You can find your desire furniture in good condition in your budget",
      id: 2,
      prev: 1,
      next: 1,
      img: hero2,
    },
  ];

  return (
    <div className="h-screen mb-20 ">
      <div className="carousel w-full sm:h-full h-5/6 bg-info ">
        {infos.map((info) => (
          <Banner key={info.id} info={info}></Banner>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
