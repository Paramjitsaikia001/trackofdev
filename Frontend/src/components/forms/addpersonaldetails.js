import React, { useState } from 'react';
import { inputStyles } from '../../utils/styles';
import Logo from '../ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../Context/user.context';
import { useContext } from 'react';
import { ROUTES } from '../../constants/routes';
const PersonalDetails = () => {
    const navigate = useNavigate();
    const { addDetails } = useContext(UserContext)

    const [bio, setbio] = useState('');
    const [github, setgithub] = useState("")
    const [linkedin, setlinkedin] = useState('');
    const [Portfolio, setPortfolio] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // Submit the form data to your server or API
        console.log(e)
    };


    const addDetailsHandler = async () => {
        try {
            await addDetails(github, linkedin, Portfolio, bio)
            navigate(ROUTES.PROFILE)
        } catch (error) {

        }
    }




    return (
        <section className='flex justify-center items-center w-[100%] h-[100vh]'>
            <div className='flex flex-col gap justify-between w-[95%] h-[90vh] bg-primary-dark rounded-[2rem] shadow-lg p-4 shadow-black/20'>
                <div className="mains flex gap-20  h-full w-full">

                    <div className="logo p-10 h-full">

                        <div className="logo z-10 bg-white w-fit px-3 rounded-md shadow-sm shadow-white/70">

                            <Logo />
                        </div>
                    </div>
                    <div className="PersonalDetails-container flex   justify-center items-center w-[90%] h-full rounded-r-[2rem]">

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center w-full h-full items-center">

                            <div className="github flex flex-col w-full  gap-4">

                                <input
                                    type='url'
                                    name="github"
                                    placeholder="Github Link"
                                    value={github}
                                    onChange={(e) => setgithub(e.target.value)}
                                    // className="h-18 outline-none pl-2 text-xl w-[70%] bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] "
                                    className={`h-[4rem] outline-none pl-2 text-xl w-[70%] bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] `}
                                />

                                <input
                                    type="url"
                                    name="linkedin"
                                    id="linkedin"
                                    placeholder="linkedin link"
                                    value={linkedin}
                                    onChange={(e) => setlinkedin(e.target.value)}
                                    className={`h-[4rem] outline-none pl-2 text-xl w-[70%] bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] `}
                                />

                                <input
                                    type="url"
                                    name="portfolio"
                                    placeholder="Personal Portfolio link"
                                    value={Portfolio}
                                    onChange={(e) => setPortfolio(e.target.value)}
                                    className={`h-[4rem] outline-none pl-2 text-xl w-[70%] bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] `}
                                />

                                <textarea
                                    type="text"
                                    name="bio"


                                    id="user-name"
                                    placeholder="bio"
                                    value={bio}
                                    onChange={(e) => setbio(e.target.value)}
                                    className={`${inputStyles.primary} h-[12rem] w-[70%]`}
                                />
                            </div>
                        </form>

                    </div>
                </div>



                <div className="flex gap-4 w-full justify-between px-4 pb-4">
                    <Link
                        to={ROUTES.ADDITIONALDETAILS}
                        className="px-4 py-2 bg-gray-200 text-gray-950 rounded-sm">Back</Link>
                    <button
                        type='button'
                        onClick={addDetailsHandler}

                        className="px-4 py-2 bg-blue-500 text-white rounded-sm">Let's start</button>
                </div>
            </div>
        </section>
    );
};

export default PersonalDetails;
