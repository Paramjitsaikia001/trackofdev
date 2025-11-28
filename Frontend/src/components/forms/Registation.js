import React, { useContext, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { textStyles, inputStyles } from '../../utils/styles';
import SampleRoadmapImage from "../../assets/images/sampleroadmap.png"
import Logo from '../ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../Context/user.context';
import { ROUTES } from '../../constants/routes';
const Registration = () => {
  const navigate = useNavigate();
  const { register,error ,loading} = useContext(UserContext)

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [passwordType, setpasswordTtype] = useState("password")
  const [ConfirmpasswordType, setConfirmpasswordTtype] = useState("password")
  const [otp, setOtp] = useState("")
  const [showOTPsection, setShowotpsection] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission here
    try {
      await register(email, fullName, userName, password, confirmPassword, role)
      navigate(ROUTES.HOME)
    } catch (error) {
      console.log(error);
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

  const hideShowConfirmPassword = () => {
    if (ConfirmpasswordType === "password") {
      setConfirmpasswordTtype("text")
    } else {
      setConfirmpasswordTtype("password")
    }
  }

  // const showOTPHandler = async () => {
  //   setShowotpsection(!showOTPsection)
  //   try {
  //     console.log("Sending OTP to:", email);
  //     console.log(process.env.REACT_APP_BASE_URL);
      
  //     await sendOTP(email)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const otpVerification = async () => {
  //   try {
  //     await verifyOTP(email, otp)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <section className='flex justify-center items-center w-[100%] h-[100vh]'>
      <div className='flex w-[95%] h-[90vh] bg-primary-dark rounded-[2rem] shadow-lg shadow-black/20'>

        <div className="detailsofplatofoem hidden xl:flex relative w-[60%] flex-col h-full  rounded-l-[2rem] p-12 bg-cover" style={{ backgroundImage: `url(${SampleRoadmapImage})` }}>
          <div className="divbackcover bg-gradient-to-br from-black to-black/30  absolute top-0 right-0  w-full h-full rounded-l-[2rem]"></div>
          <div className="logo z-10 bg-white w-fit px-3 rounded-md shadow-sm shadow-black">

            <Logo />
          </div>
          <div className="info-section flex flex-col justify-end items-center h-full z-10">
            <p className=" text-white bg-white/30 px-4 py-4 rounded-lg text-lg mb-6 border-white border backdrop-blur-sm backdrop-filter shadow-sm italic font-serif">
              “Join the journey to mastery — create your account and start exploring your personalized development roadmap today.”
            </p>

          </div>
        </div>

        <div className="registration-container flex flex-col text-sm md:text-lg justify-center items-center xl:w-[40%] w-full h-full rounded-r-[2rem]">

          <div className="registration-form w-[80%] text-sm md:text-base">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center w-full items-center">

              <div className="fullnameandusername flex w-full   gap-4 h-14">

                <input
                  type="text"
                  name="fullName"
                  id="full-name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  // className="h-18 outline-none pl-2 text-xl w-1/2 bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] "
                  className={inputStyles.primary}
                />

                <input
                  type="text"
                  name="userName"
                  id="user-name"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={inputStyles.primary}
                />
              </div>

              <div className="passowordandconfirm flex w-full gap-4 ">



                <div
                  className={`
                ${inputStyles.primary}
                w-1/2 flex  justify-center px-2 gap-2 items-center`}>

                  <input
                    type={passwordType}
                    name="password"
                    id="hs-toggle-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 w-[98%]  outline-none     bg-transparent  placeholder-white/40 text-white font-[500]"

                  />
                  <button
                    type='button'
                    onClick={hideShowPassword}
                    className='items-center justify-center'
                  >
                    <Eye className={`${passwordType === "password" ? "hidden" : ""} text-white/50`} />
                    <EyeClosed className={`${passwordType === "password" ? "" : "hidden"} text-white/50`} />
                  </button>
                </div>


                <div
                  className={`
                ${inputStyles.primary}
                w-1/2 flex  justify-center px-2 gap-2 items-center`}>

                  <input
                    type={ConfirmpasswordType}
                    name="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-18 w-[98%] outline-none   bg-transparent  placeholder-white/40 text-white font-[500]"

                  />
                  <button
                    type='button'
                    onClick={hideShowConfirmPassword}
                    className='items-center justify-center text-white/50'
                  >
                    <Eye className={`${ConfirmpasswordType === "password" ? "hidden" : ""} `} />
                    <EyeClosed className={`${ConfirmpasswordType === "password" ? "" : "hidden"}`} />
                  </button>
                </div>
              </div>

              <div className="emailandOTP w-full flex flex-col gap-8 ">
                <div
                  className={`
                emailsendOTPBtn flex w-full gap-4 items-center h-14 justify-center `}>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`
                      ${inputStyles.primary}
                      h-18 outline-none pl-2  w-full bg-transparent border-2 border-white/50 rounded-lg  placeholder-white/40 text-white font-[500] h-full`}
                  />
                  {/* <button
                    type='button'
                    onClick={showOTPHandler}
                    className="w-[25%] py-2 hover:bg-transparent border-2 rounded-2xl md:rounded-full border-white/50  text-black font-semibold bg-white hover:text-white transition-colors duration-300"
                  >Send OTP</button> 
                </div>
                <div className={`${showOTPsection === true ? "" : "hidden"} otpsection flex gap-4 items-center justify-center transition-transform duration-500`}>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    value={otp}
                    placeholder='Enter OTP'
                    onChange={(e) => setOtp(e.target.value)}
                    className={`
                      ${inputStyles.primary}
                      h-18 outline-none pl-2  w-[70%] bg-transparent border-2 border-[#00d0ff] rounded-lg  placeholder-white/40 text-white font-[500] h-14`}
                  />
                  <button
                    type='button'
                    onClick={otpVerification}
                    className="w-[40%] py-2 hover:bg-transparent border-2 rounded-full border-[#00d0ff] hover:border-white/50   text-white font-semibold bg-[#00d0ff]/30 transition-colors duration-300"
                  >
                    Verify Email
                  </button>*/}

                </div> 
              </div>


              <div className="role flex w-full h-14 text-sm md:text-lg items-center font-extralight text-[#00ffee]  justify-end gap-1">
                <span className='  italic font-sans'>You're a </span>
                <select
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-18 outline-none   w-[40%] bg-transparent rounded-lg  placeholder-white/40 italic font-semibold h-full"
                >
                  <option value="">YOUR ROLE</option>
                  <option value="Developer">Developer</option>
                  <option value="Student" >Student</option>
                </select>
              </div>
            
             {error && (
                <p className="w-full bg-red-700 rounded-full text-white text-center text-sm md:text-lg">
                  {error}
                </p>
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className=" w-full flex items-center justify-center bg-[#00ffee]/20 rounded-full h-14  font-semibold text-white hover:shadow-sm hover:shadow-white/30 transition-transform duration-300 ">
               {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
          <div className="if-register mt-4">
            <p className={textStyles.body}>Already registered?
              <Link to={ROUTES.LOGIN}
                className='underline cursor-pointer text-[#00ffee]'>Click here</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
