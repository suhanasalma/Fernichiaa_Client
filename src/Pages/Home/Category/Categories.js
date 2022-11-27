import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import img1 from "../../../Assets/category/1.png";
import img2 from "../../../Assets/category/2.png";
import img3 from "../../../Assets/category/3.png";
import img4 from "../../../Assets/category/4.png";
import img5 from "../../../Assets/category/5.png";
import Loading from '../../../Loading/Loading';
import Category from './Category';

const Categories = () => {
   // const [categories,setCategories] = useState([])

   const { data:categories=[] ,isLoading} = useQuery({
     queryKey: ["categories"],
     queryFn: () => 
     fetch("http://localhost:5000/categories")
     .then(res=>res.json())
   });

   // console.log(categories)
   if (isLoading){
      return <Loading/>
   }
     // useEffect(()=>{
     //    fetch("http://localhost:5000/categories")
     //      .then((res) => res.json())
     //      .then((data) => setCategories(data));

     // },[])

     // console.log(categories)

     return (
       <div className="grid grid-cols-5">
         {categories?.map((categoryy) => (
           <Category key={categoryy._id} categoryy={categoryy}></Category>
         ))}
       </div>
     );
};

export default Categories;