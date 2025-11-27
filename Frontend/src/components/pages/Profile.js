import React, { useState, useContext, useEffect } from "react";
import { Github, BriefcaseBusiness, GraduationCap, CalendarDays, Linkedin, SquarePen } from "lucide-react"
import { Link } from "react-router-dom";
import SavedRoadmaps from "../../utils/savedRoadmap";
import UserContext from "../../Context/user.context";
import ReviewsofUser from "../../utils/ReviewofUser";
import UserActivity from "../../utils/UserActivity";
import MobileNav from "../navigation/mobilenav";
import { ROUTES } from "../../constants/routes";
import Loading from "../../utils/loading";

export default function Profile() {

    const { user, loading, isAuthanticate, getCurrentUser } = useContext(UserContext)

    const date = new Date(user?.createdAt);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    const [isSavedRoadmaps, setSavedRoadmaps] = useState(true)
    const [isReviews, setReview] = useState(false)
    const [isActivity, setActivity] = useState(false)

    const SavedRoadmapHandler = () => {
        if (isSavedRoadmaps === false) {
            if (isReviews === true) {
                setReview(!isReviews)
            } else if (isActivity === true) {
                setActivity(!isActivity)
            }

            setSavedRoadmaps(!isSavedRoadmaps)
        }
    }

    const IsReviewsHandler = () => {
        if (isReviews === false) {
            if (isSavedRoadmaps === true) {
                setSavedRoadmaps(!isSavedRoadmaps)
            } else if (isActivity === true) {
                setActivity(!isActivity)
            }

            setReview(!isReviews)
        }

    }
    const IsActivityHandler = () => {
        if (isActivity === false) {
            if (isSavedRoadmaps === true) {
                setSavedRoadmaps(!isSavedRoadmaps)
            } else if (isReviews === true) {
                setReview(!isReviews)
            }

            setActivity(!isActivity)
        }
    }




    useEffect(() => {
        if (!user) {
            getCurrentUser()
        }
    }, [])

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!isAuthanticate) {
        return <p>who are you?</p>
    }
    return (
        <section className="flex flex-col xl:w-[80%] w-[100%] h-[100%]">
            <div className="w-full flex flex-col gap-8">
                {/* Profile Details */}
                <div className="profiledetails flex flex-col relative">


                    <div className="relative pb-6">
                        <div className="header w-full relative">

                            {
                                user?.coverPicture ?
                                    <div className="cover bg-cover bg-center w-full h-[20vh] md:h-[36vh] "
                                        style={{
                                            backgroundImage: `url(${user?.coverPicture})`,
                                        }}
                                    >
                                    </div>
                                    : <div className="cover bg-cover bg-center w-full h-[20vh] md:h-[36vh] bg-[#8796f8] "
                                    >                            </div>
                            }
                            {
                                user?.profilePicture ?
                                    <div className="profilepic w-[30vw] h-[30vw] sm:w-[10rem] sm:h-[10rem] rounded-full bg-center bg-cover  absolute border-[5px] border-primary-bg -bottom-16 left-3"
                                        style={{
                                            backgroundImage: `url(${user?.profilePicture})`,
                                        }}
                                    ></div>
                                    : <div className="profilepic w-[30vw] h-[30vw] sm:w-[10rem] sm:h-[10rem] rounded-full bg-center bg-cover  absolute border-[5px] border-primary-bg -bottom-16 left-3"
                                        style={{
                                            backgroundImage: "url(/profileAndCover/default.png)",
                                        }}
                                    >

                                    </div>
                            }

                            <Link
                                to={ROUTES.UPDATEDETAILS}
                                className="text-center profilepic text-white/80 text-md rounded-full border-2 font-bold border-white/20 py-2 px-5 absolute right-0 m-2 cursor-pointer">
                                <SquarePen className="inline-block w-4 h-4 sm:hidden " />
                                <p className="sm:block hidden">Edit profile</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-10 px-4 sm:px-8 relative">
                        <div className="nameusername flex items-baseline gap-3">
                            <div className="names flex flex-col">
                                <span className="font-extrabold text-[6vw] sm:text-3xl text-white">{user.fullName}</span>
                                <span className="text-xl font-medium text-white/60 italic ">@{user.userName}</span>
                            </div>
                            <div className="professionalDetail bg-black py-1 px-3 rounded-full transition-transform duration-300">
                                <div className="student flex justify-center items-center text-[#9590df] font-medium gap-1 text-sm sm:text-xl">
                                    <div className="intro flex gap-1 items-center justify-center">

                                        <GraduationCap />
                                        <p>{user.Role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bio text-white text-sm sm:text-lg font-mono w-full">
                            <p>{user.bio}</p>
                        </div>
                        <div className="linksandjoineddate flex flex-col gap-6">

                            <div className="linkes flex gap-2 sm:gap-3 ">
                                {
                                    user.github ?

                                        <span className="group flex items-center justify-center bg-[#fff] w-fit py-2 text-sm sm:text-lg px-3 rounded-md gap-1 sm:gap-2 cursor-pointer hover:text-white hover:bg-black transition-colors duration-200">
                                            <Github className="group-hover:fill-white w-4  sm:w-6 sm:h-6" />
                                            <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-black group-hover:text-white">
                                                Github
                                            </a>
                                        </span>
                                        : ""
                                }
                                {user.portfolio ?

                                    <span className="group items-center justify-center flex bg-[#fff] w-fit py-2 text-sm sm:text-lg px-3 rounded-md gap-1 sm:gap-2 cursor-pointer hover:text-white hover:bg-black transition-colors duration-200">
                                        <BriefcaseBusiness className="group-hover:fill-white w-4  sm:w-6 sm:h-6" />
                                        <a href={user.portfolio} target="_blank" rel="noopener noreferrer" className="text-black group-hover:text-white">
                                            Portfolio
                                        </a>
                                    </span>
                                    : ""
                                }
                                {user.Linkedin ?

                                    <span className="group items-center justify-center flex bg-[#fff] w-fit py-2 text-sm sm:text-lg px-3 rounded-md gap-1 sm:gap-2 cursor-pointer hover:text-white hover:bg-black transition-colors duration-200">
                                        <Linkedin className="group-hover:fill-white w-4  sm:w-6 sm:h-6" />
                                        <a href={user.Linkedin} target="_blank" rel="noopener noreferrer" className="text-black group-hover:text-white">
                                            Linkedin
                                        </a>
                                    </span>
                                    : ""
                                }
                            </div>
                            <div className="joinedate flex text-sm sm:text-md gap-1  sm:gap-2 text-white/60 items-center ">
                                <CalendarDays className=" w-4  sm:w-6 sm:h-6" />
                                <p className=" font-semibold font-[Inter]">Joined {month} {year}</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Saved Roadmaps */}
                <div className="border-b border-[#000] sm:text-xl text-sm  w-full flex ">
                    <div
                        onClick={SavedRoadmapHandler}
                        className="savedroadmaps w-1/3 flex flex-col items-center hover:bg-[#033a7e] justify-center cursor-pointer">

                        <h2 className={`${isSavedRoadmaps === false ? "text-[#a8a6a6]" : "text-white"}  py-3  font-semibold font-[Inter] ]`}>Saved Roadmaps</h2>
                        <div className={`${isSavedRoadmaps === false ? "bg-transparent" : "bg-primary-dark"} underline w-[50%] rounded-full h-2 `}></div>
                    </div>
                    <div
                        onClick={IsReviewsHandler}
                        className="reviews w-1/3 flex flex-col items-center hover:bg-[#033a7e] justify-center cursor-pointer">
                        <h2 className={`${isReviews === false ? "text-[#a8a6a6]" : "text-white"} cursor-pointer  font-semibold font-[Inter] py-3`}>Reviews</h2>
                        <div className={`${isReviews === false ? "bg-transparent" : "bg-primary-dark"} underline w-[50%] rounded-full h-2 `}></div>
                    </div>
                    <Link
                        onClick={IsActivityHandler}
                        className="reviews w-1/3 flex flex-col items-center hover:bg-[#033a7e]">
                        <h2 className={`${isActivity === false ? "text-[#a8a6a6]" : "text-white"} cursor-pointer  font-semibold font-[Inter] py-3`}>Activity</h2>
                        <div className={`${isActivity === false ? "bg-transparent" : "bg-primary-dark"} underline w-[50%] rounded-full h-2 `}></div>
                    </Link>
                </div>
                {isSavedRoadmaps ?

                    <SavedRoadmaps /> : ""
                }
                {isReviews ?

                    <ReviewsofUser /> : ""
                }
                {isActivity ?
                    <UserActivity />
                    : ""
                }
            </div>
            <MobileNav />
        </section>
    );
}