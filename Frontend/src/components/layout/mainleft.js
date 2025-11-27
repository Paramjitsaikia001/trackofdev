import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import UserContext from '../../Context/user.context';
import { Home,Search ,Bell,FolderCode,CircleUserRound,ChartArea,Bookmark,Info,Cog,LogOut} from 'lucide-react';
import { useContext } from 'react';
import { ROUTES } from '../../constants/routes';

export default function Mainleft() {
    const { logOut } = useContext(UserContext)
    const location = useLocation();
    const isRegisterPage = location.pathname === ROUTES.REGISTER;
    const isLoginPage = location.pathname === ROUTES.LOGIN;
    const isAdditionalDetailsPage = location.pathname === ROUTES.ADDITIONALDETAILS;
    const isPersonalDetailsPage = location.pathname === ROUTES.ADDPERSONALDETAILS;

    if (isRegisterPage || isAdditionalDetailsPage || isLoginPage || isPersonalDetailsPage) {
        return null;
    }

    const logoutHandler = async () => {
        try {
            await logOut()
            window.location.href = ROUTES.LANDINGPAGE;
        } catch (error) {
            console.log(error);

        }
    }

    return (

        <section className={`
            md:h-[100vh] md:sticky md:top-0 md:items-center justify-between md:p-0 md:m-0 md:bg-primary-dark
            xl:w-[20%] md:w-[15%] md:flex md:flex-col
            transition-all duration-300 ease-in-out
          `}>
            <section className="flex flex-col justify-start gap-6 items-center h-[65vh] w-[80%] pt-3">
                <div className='px-3 hidden md:block w-[100%] cursor-pointer'>
                    <Logo />
                </div>

                {/* navber */}
                <nav className='hidden  w-[100%] md:flex flex-col justify-between h-full'>
                    <ul className={`flex flex-col justify-start w-[100%] pb-2 gap-1`}>

                        {/* home  */}
                        <Link to={ROUTES.LANDINGPAGE}>
                            <li className={`text-white ${location.pathname === ROUTES.LANDINGPAGE ? 'xl:bg-[#314969] ' : ''} xl:list-none xl:gap-3 flex xl:items-center xl:flex-row items-start flex-col text-gray-300 md:py-2 px-3 xl:hover:bg-[#314969] text-2xl font-medium rounded-xl `}>
                                <span className=" font-[200]">
                                     <Home className={`${location.pathname === ROUTES.LANDINGPAGE ? ' xl:fill-transparent fill-white' : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>Home</span>
                            </li>
                        </Link>

                        {/* search  */}
                        <Link to={ROUTES.SEARCH}>
                            <li className={`text-white ${location.pathname === ROUTES.SEARCH ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex xl:items-center items-start xl:flex-row flex-col  md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl text-2xl font-medium`}>
                                <span className={` text-4xl`}>
                                <Search className={`${location.pathname === ROUTES.SEARCH ? 'xl:stroke-2 stroke-[3px]' : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>Search</span>
                            </li>
                        </Link>

                        {/* notificatons  */}
                        <Link to={ROUTES.NOTFICATION}>
                            <li className={`text-white ${location.pathname === ROUTES.NOTFICATION ? 'xl:bg-[#314969] bg-none' : ''}    xl:list-none xl:gap-3 flex xl:items-center items-start xl:flex-row flex-col  md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl text-2xl font-medium`}>
                                <span className=" material-symbols-outlined text-4xl font-[100] ">
                                    <Bell className={`${location.pathname === ROUTES.NOTFICATION ? ' xl:fill-transparent fill-white' : ''} md:w-9 md:h-9 xl:w-6 xl:h-6 `}/>
                                </span>
                                <span className='xl:block hidden'>Notifications</span>
                            </li>
                        </Link>

                        <Link to={ROUTES.DEVELOPMENT}>
                            <li className={`text-white ${location.pathname === ROUTES.DEVELOPMENT ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex xl:items-center items-start xl:flex-row md:py-2 px-3 flex-col xl:hover:bg-[#314969]  rounded-xl text-2xl font-medium`}>
                                <span className={` material-symbols-outlined text-4xl`}>
                                    <FolderCode className={`${location.pathname === ROUTES.DEVELOPMENT ? ' xl:fill-transparent fill-white' : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <div className={`xl:block hidden `}>
                                    Development
                                </div>
                            </li>
                        </Link>
                        <Link to={ROUTES.PROFILE}>
                            <li className={`text-white ${location.pathname === ROUTES.PROFILE ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 text-2xl font-medium`}>
                                <span className="material-symbols-outlined text-4xl">
                                    <CircleUserRound className={`${location.pathname === ROUTES.PROFILE ? 'xl:stroke-2 stroke-[3px]'  : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>Profile</span>
                            </li>
                        </Link>
                        <Link to={ROUTES.ACITVITY}>
                            <li className={`text-white ${location.pathname === ROUTES.ACITVITY ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 text-2xl font-medium`}>
                                < span className="material-symbols-outlined text-4xl">
                                    <ChartArea className={`${location.pathname === ROUTES.ACITVITY ? 'xl:stroke-2 stroke-[3px]'  : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>Your Activity</span>
                            </li>
                        </Link>
                        <Link to={ROUTES.SAVED}>
                            <li className={`text-white ${location.pathname === ROUTES.SAVED ? 'text-[#00ffea]' : ''} xl:list-none xl:gap-3 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl flex xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 text-2xl font-medium`}>
                                <span className="material-symbols-outlined text-4xl">
                                    <Bookmark className={`${location.pathname === ROUTES.SAVED ? ' xl:fill-transparent fill-white' : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>Saved</span>
                            </li>
                        </Link>

                    </ul>

                    <ul className='flex flex-col'>
                        <Link to={ROUTES.ABOUT_US}>
                            <li className={`text-white ${location.pathname === ROUTES.ABOUT_US ? 'text-[#00ffea]' : ''} xl:list-none xl:gap-3 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl flex xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100  `}>
                                <span className="material-symbols-outlined text-4xl">
                                    <Info className={`${location.pathname === ROUTES.ABOUT_US ? ' xl:stroke-2 stroke-[3px]'  : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>About us</span>
                            </li>
                        </Link>
                        <Link to={ROUTES.SETTINGS}>
                            <li className={`text-white ${location.pathname === ROUTES.SETTINGS ? 'text-[#00ffea]' : ''} xl:list-none xl:gap-3 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl flex xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                <span class="material-symbols-outlined text-4xl">
                                    <Cog className={`${location.pathname === ROUTES.SETTINGS ?  'xl:stroke-2 stroke-[3px]'  : ''} md:w-9 md:h-9 xl:w-6 xl:h-6`}/>
                                </span>
                                <span className='xl:block hidden'>Settings</span>
                            </li>
                        </Link>

                    </ul>
                </nav>
            </section>

            <section className={`hidden md:your-activity md:h-auto md:flex  md:flex-col md:border-t-2 md:border-gray-500 md:w-[100%] md:p-2 md:items-center md:justify-between `}>
                <div className="chatButtonHeader w-[100%] px-1 flex flex-col justify-center items-center gap-1">
                    {/* <Link to="/traintoexcellency/Frontend-build/ai-chat" className="border-0 rounded-xl h-11 w-[90%] gradientColor p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <div className='flex justify-center items-center gap-1'>
                            <img src={AIChatIcon} alt="AiChatIcon" />
                            <h2 className='text-base font-extrabold'>Find a Mentor</h2>
                        </div>
                    </Link>
                       <Link to="/traintoexcellency/Frontend-build/ai-chat" className="border-0 rounded-xl h-11 w-[90%] gradientColor p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <div className='flex justify-center items-center gap-1'>
                            <img src={AIChatIcon} alt="AiChatIcon" />
                            <h2 className='text-base font-extrabold'>be a Mentor</h2>
                        </div>
                    </Link> */}

                    <button 
                    onClick={logoutHandler}
                    className=" rounded-xl h-11 w-[90%] text-white border-2 border-white/40 p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <LogOut className="w-6 h-6"/>
                        <div className='flex justify-center items-center gap-1'>
                            <h2 className='text-base font-extrabold xl:block hidden'>Log out</h2>
                        </div>
                    </button>
                </div>
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-4 justify-center"></ul>
                </div>
            </section>
        </section>


    );
}