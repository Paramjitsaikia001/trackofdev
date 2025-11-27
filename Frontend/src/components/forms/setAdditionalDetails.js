import React, { useState } from 'react'
import ProfileAndcover from '../../hooks/profileAndcover';
import { CircleCheckBig } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../Context/user.context';
import { ROUTES } from '../../constants/routes';
const AdditionalDetails = () => {
  const navigate = useNavigate();
  const { addImages } = useContext(UserContext)

  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedCover, setSelectedCover] = useState("");
  console.log(selectedCover, selectedProfile);



  const { ProfilePics: profileOptions, CoverPics: coverOptions, loading } = ProfileAndcover()

  if (loading) {
    return <h1>loading</h1>
  }

  const addImagesHandler = async () => {
    try {
      await addImages(selectedProfile, selectedCover)
      navigate(ROUTES.ADDPERSONALDETAILS)
      console.log("done");

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh]'>
      <div className=' text-white   w-[95%] h-[90vh] bg-primary-dark rounded-[2rem] shadow-lg shadow-black/20'>

        <div className="sections flex flex-col lg:flex-row justify-center items-center w-full h-[90%]">


          <div className="profilepicx w-[20%] h-full flex flex-col justify-center items-center gap-8">

            <h2 className=" text-xl w-full text-center font-extralight italic">Select Profile Picture</h2>
            <div className="flex lg:flex-col gap-10 mb-6">
              {profileOptions.map((profilepic) => (
                <div
                  onClick={() => setSelectedProfile(profilepic.url)}
                  className={`relative flex transition-transform duration-300  rounded-full images w-30 h-30 lg:w-40 lg:h-40`}>
                  <img
                    key={profilepic.id}
                    src={profilepic.url}
                    alt={profilepic.tittle}
                    className={`w-full h-full rounded-full object-cover cursor-pointer `}
                    onClick={() => setSelectedProfile(profilepic.url)}
                  />
                  <div className={`bg-black/50 top-0 text-white flex text-4xl font-bold rounded-full absolute w-full object-cover h-full z-20 ${selectedProfile === profilepic.url ? "" : "hidden"}`}>
                    <CircleCheckBig className='text-white font-bold w-8 h-8 m-2' strokeWidth={3.5} /> </div>
                </div>
              ))}
            </div>
          </div>

          <div className="line h-[90%] hidden lg:block rounded-full w-[2px] bg-white"></div>

          <div className="coverImages w-[70%] flex-col items-center justify-center h-full py-2">

            <h2 className=" text-xl w-full text-center font-extralight italic">Select Cover Photo</h2>
            <div className="w-full h-full justify-center items-center flex flex-col gap-12">
              {coverOptions.map((coverImage) => (
                <div
                  onClick={() => setSelectedCover(coverImage.url)}
                  className={`relative flex transition-transform duration-300  rounded-xl images w-[70%] lg:h-40 h-20`}>

                  <img
                    key={coverImage.id}
                    src={coverImage.url}
                    alt={coverImage.tittle}
                    className={`relative h-full w-full object-cover rounded-xl cursor-pointer `}



                  />
                  <div className={`bg-black/50 top-0 text-white flex text-4xl font-bold rounded-xl absolute w-full object-cover h-full z-20 ${selectedCover === coverImage.url ? "" : "hidden"}`}>
                    <CircleCheckBig className='text-white font-bold w-8 h-8 m-2' strokeWidth={3.5} /> </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full justify-between px-8">
          <Link
            to={ROUTES.REGISTER}
            className="px-4 py-2 bg-blue-500 text-white rounded-sm">Back</Link>
          <div className="flex gap-2">

            <Link
              to={ROUTES.ADDPERSONALDETAILS}

              className="px-4 py-2 bg-blue-500 text-white rounded-sm">Skip & Next</Link>
            <button
              onClick={addImagesHandler}

              className="px-4 py-2 bg-gray-200 text-gray-950 rounded-sm">Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalDetails