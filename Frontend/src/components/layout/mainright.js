import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Development from '../../hooks/developments.hooks';

import Footer from './Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import TypingEffect from 'react-typing-effect';
import Header from './Header'
import MobileNav from '../navigation/mobilenav'
import Reviews from '../forms/Review';
import { useContext, useState } from 'react';
import SavedRoadmapContext from '../../Context/savedRoadmap.context';
import { toast } from 'sonner';
import { Bookmark } from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import Loading from '../../utils/loading';






export default function Mainright({ toggleHideLeft, Hide_Left }) {
    const { savedRoadmap, deleteSavedRoadmap, getSavedRoadmapByUser } = useContext(SavedRoadmapContext);






    const location = useLocation();
    const [savedMap, setSavedMap] = useState({});
    const navigate = useNavigate(); // Fixed typo: Changed 'nagivate' to 'navigate'

    const routerhander = (name) => {
        navigate(`${ROUTES.DEVELOPMENT}/${name}`);
    }

    const roadmapsavedHandler = async (roadmapRoute) => {
        if (savedMap[roadmapRoute]) {
            // already saved → delete
            const res = await deleteSavedRoadmap({ roadmapRoute });
            if (res?.success) {
                setSavedMap(prev => ({ ...prev, [roadmapRoute]: false }));
                toast.success("Removed from saved roadmaps");
            }
        } else {
            // not saved → save
            const res = await savedRoadmap({ roadmapRoute });
            if (res?.success) {
                setSavedMap(prev => ({ ...prev, [roadmapRoute]: true }));
                toast.success("Saved to your roadmaps");
            }
        }
    };

    const { data: developmentCards, loading, error } = Development();
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <h2 className='text-white'>Something went wrong!</h2>
    }


    return (
        <section className={`
            flex flex-grow flex-col h-full gap-4 global-scroll-bar
           w-[100%] xl:w-[80%] 
            transition-all duration-300 ease-in-out overflow-hidden
         `}>
            <div className='flex justify-between py-2 px-4'>
                <Header toggleHideLeft={toggleHideLeft} Hide_Left={Hide_Left} />
            </div>
            <main className="flex flex-col gap-12 p-4 w-[100%]">

                {/* main line  */}
                <div className="mainline w-[90%] lg:w-[60%]">
                    <p className="flex flex-col gap-4">
                        <span className="text-white font-bold text-4xl flex flex-col">
                            <span className='text-white'>Hello</span>
                            <TypingEffect text={['Learners', 'Developers']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={1000} />
                        </span>
                        <p className="text-purple-400 text-lg flex flex-col gap-1">
                            <span className='text-2xl text-[#d9bcf4] font-bold'>Ready to Elevate Your Coding Journey? </span>
                            The Power to Learn. The Tools to Build. The Potential for Impact.</p>

                    </p>

                </div>

                {/* sliders */}
                <div className="whatisfor z-1 w-[100%] items-center flex flex-col gap-4 justify-center  relative h-[45vh]  md:h-[60vh] ">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="swiper "
                    >
                        <SwiperSlide className='swiper-slide justify-center '>
                            <div className="slide1details text-[8vw] md:text-[8vw] md:text-6xl flex justify-center items-center text-[#a0d4ff] font-bold">
                                <h1>We Features in</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-[8vw] md:text-6xl font-bold">What is for?</h1>
                            </div>
                            <div className="slide2details text-[4vw] md:text-xl text-white">
                                <p class="styleScript italic">Discover Your Passion, Blaze Your Trail, and Build Something Extraordinary!</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-[8vw] md:text-6xl font-bold">Development Areas</h1>
                            </div>
                            <div className="slide2details text-[4vw] md:text-xl text-white">
                                <p class="styleScript italic">
                                    We cover Web, Mobile, Game Development, AI, Data Science, Blockchain, IoT, DevOps, and more.
                                </p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-[8vw] md:text-6xl font-bold">Personalized Roadmaps</h1>
                            </div>
                            <div className="slide2details text-[4vw] md:text-xl text-white">
                                <p class="styleScript italic">Your personalized learning journey tailored to your goals and interests.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* developments  */}
                <div className="developmentsection flex flex-col w-[100%]">
                    <div className="development flex flex-col gap-8">
                        <div className="border-b-2 border-gray-500">
                            <h2 className=' text-5xl font-bold text-[#FFFF]'>Development</h2>
                        </div>


                        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                            {developmentCards.slice(0, 3).map((card) => (
                                <div
                                    key={card.id}
                                    className="relative group bg-white rounded-xl flex flex-col justify-between shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                // onClick={() => routerhander(card.route)
                                // }

                                >
                                    {/* heading  */}
                                    <div className='p-6'>
                                        <h3 className="text-xl font-[900] text-gray-900 mb-4 uppercase tracking-tight">{card.title}</h3>
                                        <p className="text-gray-600 text-md font-light leading-relaxed mb-6">{card.description}</p>
                                    </div>
                                    <div className="p-6 flex items-center gap-5 justify-between">
                                        {/* Icon */}
                                        <span
                                            onClick={() => roadmapsavedHandler(card.route)}
                                            className={`text-[2.5rem] font-light cursor-pointer `}>

                                            <Bookmark fill={savedMap[card.route] ? 'black' : 'none'} />
                                        </span>
                                        {/* Button */}
                                        <button
                                            onClick={e => { e.stopPropagation(); routerhander(card.route); }}
                                            className="w-full py-3 bg-primary-bg text-white font-semibold rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
                                        >
                                            Show Track
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Explore More Button */}
                        <div className="text-center mt-12">
                            <button className="text-indigo-400 font-semibold text-lg hover:text-indigo-300 transition-colors duration-300">
                                Explore more destiny...
                            </button>
                        </div>
                    </div>
                </div>

                <Reviews />
            </main >
            <Footer />
            <MobileNav />
        </section >
    );
}
