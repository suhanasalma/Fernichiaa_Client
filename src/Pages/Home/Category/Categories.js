import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import img1 from "../../../Assets/category/1.png";
import img2 from "../../../Assets/category/2.png";
import img3 from "../../../Assets/category/3.png";
import img4 from "../../../Assets/category/4.png";
import img5 from "../../../Assets/category/5.png";
import Loading from "../../../Loading/Loading";
import Category from "./Category";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://server-side-one-beta.vercel.app/categories").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-10">
      {categories?.map((categoryy) => (
        <Category key={categoryy._id} categoryy={categoryy}></Category>
      ))}
    </div>
  );
};

export default Categories;
