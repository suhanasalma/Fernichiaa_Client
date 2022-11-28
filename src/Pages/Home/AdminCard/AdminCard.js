import React, { useEffect, useState } from "react";

const AdminCard = () => {
  const [adminPannels, setadminPannels] = useState("");

  useEffect(() => {
    fetch("https://server-side-one-beta.vercel.app/users/suhanasalma@gmail.com")
      .then((res) => res.json())
      .then((data) => setadminPannels(data));
  }, []);

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="xl:flex xl:items-center xL:-mx-4">
            <div class="xl:w-1/2 xl:mx-4">
              <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Our Team
              </h1>

              <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                This is our awsome team, who ensure your secure delivery and
                transection . if you ever face any kind of violance , fraud, or
                if you need any kind of help regarding to be a member or you
                want to be an seller or want to work in admin panner you can
                always contact us.kindly contact through given information.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img
                  class="object-cover rounded-xl aspect-square"
                  src={adminPannels?.img}
                  alt=""
                />

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {adminPannels?.name}
                </h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
                  {adminPannels?.role}
                </p>
                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
                  {adminPannels?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminCard;
