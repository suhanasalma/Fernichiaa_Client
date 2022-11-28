import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../../../Context/SharedContext";
import useToken from "../../../Hooks/useToken";
import useTitle from "../../../Hooks/useTitle";

const LogIn = () => {
  useTitle('Log In')
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
   const { signInUser, } = useContext(authContext);
   const [loginEmail,setLoginEmail] = useState('')
   const [token] = useToken(loginEmail)
   const location = useLocation()
   const navigate = useNavigate()

      let from = location.state?.from?.pathname || "/";

      if (token) {
        navigate('/');
      }


   const handleInfo = (data) =>{
      // console.log(data)
      signInUser(data.email,data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoginEmail(data.email);
        // console.log('logged')
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error)
      });

   }


  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl">
        <div className="text-center">
          <h1>LogIn</h1>
          <p>and explore many more things to do</p>
        </div>
      </div>
      <section className="bg-white ">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit(handleInfo)} className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize ">
              Log In
            </h1>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                {...register("email")}
                className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                {...register("password")}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Log in
              </button>

              

              <div className="mt-6 text-center ">
                <p href="#" className="text-sm ">
                  Don’t have an account yet?{" "}
                  <Link className="text-secondary ml-3" to="/signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
