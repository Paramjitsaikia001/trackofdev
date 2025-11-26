import React, { useContext, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { inputStyles, textStyles } from '../../utils/styles';
import SampleRoadmapImage from "../../assets/images/sampleroadmap.png"
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import UserContext from '../../Context/user.context';

const Login = () => {

  const { login, loading,  } = useContext(UserContext)

  const [userName, setUserName] = useState('');
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('');
  const [passwordType, setpasswordTtype] = useState("password")

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    // Submit the form data to your server or API
    try {
      await login(email,userName,password)
      window.location.href = ROUTES.HOME;
    } catch (error) {
      console.log(error.message);
      
    }
  };


  //hide and show password toggle
  const hideShowPassword = () => {
    if (passwordType === "password") {

      setpasswordTtype("text")
    } else {
      setpasswordTtype("password")
    }
  }

  return (
    <section className='flex justify-center items-center w-[100%] h-[100vh]'>
      <div className='flex w-[95%] h-[90vh] bg-primary-dark rounded-[2rem] shadow-lg shadow-black/20'>

        <div className="detailsofplatofoem hidden xl:flex relative w-[60%] flex-col h-full  rounded-l-[2rem] p-12 bg-cover" style={{ backgroundImage: `url(${SampleRoadmapImage})` }}>
          <div className="divbackcover bg-gradient-to-br from-black to-black/30  absolute top-0 right-0  w-full h-full rounded-l-[2rem]"></div>
          <div className="logo z-10 bg-white w-fit px-3 rounded-md shadow-sm shadow-black">

            <Logo />
          </div>
          <div className="info-section flex flex-col justify-end items-center h-full z-10">
            <p className=" text-white bg-white/30 px-4 py-4 rounded-lg text-lg mb-6 border-white/50 border backdrop-blur-sm backdrop-filter shadow-sm italic font-serif">
              “Join the journey to mastery — create your account and start exploring your personalized development roadmap today.”
            </p>

          </div>
        </div>

        <div className="Login-container flex flex-col justify-center items-center xl:w-[40%] w-full h-full rounded-r-[2rem]">
          <div className="Login-header mb-4">
          </div>
          <div className="Login-form w-[80%] ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center w-full items-center">

              <div className="emailorusername flex w-full  gap-4 h-14">
                <input
                  type="text"
                  name="userName"
                  id="user-name"
                  placeholder="Username or email"
                  value={userName || email}
                  onChange={(e) => setUserName(e.target.value) || setEmail(e.target.value)}
                  className={`
                    ${inputStyles.primary}
                    h-18 outline-none pl-2 text-xl w-full bg-transparent border-2 border-white/50 rounded-lg  placeholder-white/40 text-white font-[500] `}
                />
              </div>

              <div className="passowordandconfirm flex w-full gap-4 ">



                <div className={`
                
                ${inputStyles.primary}
                bg-transparent w-full flex border-2 border-white/50 rounded-lg justify-center px-2 gap-2 items-center`}>

                  <input
                    type={passwordType}
                    name="password"
                    id="hs-toggle-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`
                      
                      h-14 w-[98%]  outline-none    text-xl bg-transparent  placeholder-white/40 text-white font-[500]`}

                  />
                  <button
                  type='button'
                    onClick={hideShowPassword}
                    className='items-center justify-center text-white/40'
                  >
                    <Eye className={`${passwordType === "password" ? "hidden" : ""}`} />
                    <EyeClosed className={`${passwordType === "password" ? "" : "hidden"}`} />
                  </button>
                </div>


              </div>






              <button
              onClick={handleSubmit}
              disabled={loading}

                type="submit"
                className=" w-full flex items-center justify-center bg-[#00ffee]/20 rounded-full h-14 text-xl font-semibold text-white hover:shadow-sm hover:shadow-white/30 transition-transform duration-300 ">
                {loading ? "Login....":"login"}
              </button>
            </form>
          </div>
          <div className="if-register mt-4">
            <p className={textStyles.body}>New User?
              <Link to={ROUTES.REGISTER}
                className='underline cursor-pointer text-[#00ffee]'>Click here</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
