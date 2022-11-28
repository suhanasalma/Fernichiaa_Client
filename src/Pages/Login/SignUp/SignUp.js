import React, { useContext, useState } from "react";
import img from "../../../Assets/logUp/1.jpg";
import { useForm } from "react-hook-form";
import { authContext } from "../../../Context/SharedContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import { toast } from "react-toastify";
import useTitle from "../../../Hooks/useTitle";

const SignUp = () => {
  useTitle('Sign Up')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createdEmail, setCreatedEmail] = useState("");
  const navigate = useNavigate();

  const [token] = useToken(createdEmail);

  const { createUser, updateUser, createGoogleUser } = useContext(authContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const [role, setRole] = useState("user");
  const location = useLocation();

  //  const [user,setUser] = useState('')
  // console.log(imageHostKey);

  // const [data,setData] = useState('')
  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleGoolgleUser = () => {
    console.log("clicked");
    createGoogleUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const newUser = {
          name: user.displayName,
          email: user.email,
          role: role,
          img: user.photoURL,
        };
        console.log(newUser);
        fetch(`https://server-side-one-beta.vercel.app/users/${user?.email}`, {
          //  method: "POST",
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("furniture-token")}`,
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((savedData) => {
            setCreatedEmail(user?.email);
            console.log(savedData);
          });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        toast(error.message)
      });
  };

  const handleInfo = (data) => {
    const img = data.photo[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
    fetch(url,{
       method:"POST",
       body:formData
    })
    .then(res=>res.json())
    .then(result=>{
       console.log(result)
     if (result.success) {
    const user = {
      name: data.name,
      age: data.age,
      phone: data.phone,
      address: data.address,
      email: data.email,
      role: data.role,
       img: result.data.display_url,
    };
    console.log(user);
    //  setUser(user)

    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const creatuser = userCredential.user;
        console.log(creatuser);
        console.log(data.email);
        const userInfo = {
          displayName: data.name,
           photoURL: result.data.display_url,
        };
        updateUser(userInfo);
        console.log("updated");
        fetch(`https://server-side-one-beta.vercel.app/users/${data.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((savedData) => {
            console.log(savedData);
            setCreatedEmail(data.email);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          toast(error.message);
        // ..
      });
     }
     }
     )
  };


  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl">
        <div className="text-center">
          <h1>SignUp</h1>
          <p>We welcome you whole heartly</p>
        </div>
      </div>
      <section className="bg-white ">
        <div className="flex justify-center items-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5">
            <img src={img} alt="" />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500 ">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <form
                onSubmit={handleSubmit(handleInfo)}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    required
                    {...register("name")}
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Phone number
                  </label>
                  <input
                    required
                    {...register("phone")}
                    type="number"
                    placeholder="XXX-XX-XXXX-XXX"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    {...register("email")}
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Address
                  </label>
                  <input
                    required
                    {...register("address")}
                    placeholder="Dhaka, Bangladesh"
                    type="text"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Photo
                  </label>
                  <input
                    type="file"
                    required
                    {...register("photo")}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Select Acoount
                  </label>
                  <select
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("role", { required: true })}
                  >
                    <option selected value="user">
                      User
                    </option>
                    <option value="seller">Seller</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Age
                  </label>
                  <input
                    required
                    {...register("age", {
                      required: "please enter age between 14 to 100",
                    })}
                    type="number"
                    min="14"
                    max="100"
                    placeholder="18"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md    focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Password
                  </label>
                  <input
                    required
                    {...register("password")}
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
              <div className="mt-6 text-center ">
                <p href="#" className="text-sm ">
                  Already a member ?
                  <Link className="text-secondary ml-3" to="/login">
                    Log In
                  </Link>
                </p>
              </div>
              <p className="mt-4 text-center text-gray-600 ">or sign in with</p>

              <span
                href="#"
                className="btn bg-white hover:bg-secondary flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:text-white hover:border-0"
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                  <span onClick={() => handleGoolgleUser()} className="mx-2 ">
                    Sign in with Google
                  </span>

              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
