import React, { useState } from 'react'
import { FaLock, FaUser } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import axios from "axios"

const Signup = ({handleToggle,handlepassword,showpassword}) => {

  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!username || !email ||!password){
      if(email){
        setError("email is alredy in use")

      }
      setError("you must fill all the fields"); 

    }
  
    try {
  
      const response = await axios.post("http://localhost:4001/api/user/signup", {
        username: username,
        email: email,
        password: password,
      });
      console.log("User created:", response.data);
      setUserName("");
      setEmail("");
      setPassword("");
      setError(""); 
      navigate("/authentication")
    } catch (error) {
      console.error("Error creating user:", error)
      
    }
  };


  return (
    <div>
      <div className="">
      <div className="flex  items-center justify-around  w-full h-screen">
        <div className="lg:text-6xl md:text-3xl text-lg font-extrabold pointer-events-none w-full h-full md:flex items-center justify-center hidden">
          SHOP.CO
        </div>

        <div className="flex items-center flex-col justify-center gap-6  w-full">
          <div className=" w-full h-full px-8 py-8">
            <div className="flex items-center justify-center py-4">
              <h1 className="font-bold text-3xl">Sign Up</h1>
            </div>

            <div className="w-full h-full">
              {error && <span className='text-red-500'>{error}</span>}
              <div className="block pb-6">
                <span className="text-gray-700">UserName</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser />
                  </div>
                  <input
                  value={username}
                  onChange={(e)=>{setUserName(e.target.value)}}
                  required
                    type="text"
                    placeholder="userName"
                    className="outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="block pb-6">
                <span className="text-gray-700">Email</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser />
                  </div>
                  <input
                  required
                  value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="email"
                    placeholder="Email"
                    className="outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="block pb-6">
                <span className="text-gray-700">Password</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock />
                  </div>
                  <div className="flex items-center relative">
                  <input
                  required
                  value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type={`${showpassword ? "text":"password"}`}
                    placeholder="password"
                    className="outline-none  rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                  />
                  <div className="text-2xl cursor-pointer absolute right-0 duration-200 text-[#000700]">
                    {
                        showpassword?<IoIosEyeOff onClick={handlepassword}/>:<IoMdEye onClick={handlepassword}/>
                    }
                  </div>

                  </div>
               
                </div>
              </div>
            </div>
            <span className="flex justify-end pb-5 ">
              <Link to={''} className="cursor-pointer duration-10 hover:font-semibold hover:underline">
                Forgot Password?
              </Link>
            </span>
            <div onClick={handleSubmit} className="login-button flex justify-center bg-black text-white p-5 rounded-3xl cursor-pointer">
              Sign up
            </div>
            <div className="flex items-center justify-center py-4">
              or signup using
            </div>
            <div className="social-icons flex justify-center gap-7 pt-3">
              <SocialIcon url="https://www.facebook.com/" />
              <SocialIcon url="https://twitter.com/" />
              <SocialIcon url="https://www.google.com/" />
            </div>

            <h3 className="flex justify-center pt-9 pointer-events-none">
              Already having an account?
            </h3>
            <h1 onClick={handleToggle} className="flex items-center justify-center py-2 ">
               <span className="hover:font-semibold duration-300 cursor-pointer">Login</span> 
            </h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup