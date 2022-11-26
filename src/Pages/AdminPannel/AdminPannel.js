import React from "react";
import AdminCard from "./AdminCard";

const AdminPannel = () => {
  const adminPannels = [
    {
      id:1,
      name: "suhana",
      img: "",
    },
    {
      id:2,
      name: "salma",
      img: "",
    },
    
  ];
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto ">
          <h1 class="text-3xl font-semibold text-center text-secondary capitalize lg:text-4xl ">
            Our Executive Team
          </h1>

          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
           This is our awsome team, who ensure your secure delivery and transection . if you ever face any kind of violance , fraud, or if you need any kind of help regarding to be a member or you want to be an seller or want to work in admin panner you can always contact us.kindly contact through given information.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {
               adminPannels.map(admin=><AdminCard key={admin.id} admin={admin}></AdminCard>)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPannel;
