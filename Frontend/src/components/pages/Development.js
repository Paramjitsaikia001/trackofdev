import Footer from '../layout/Footer'
import TypingEffect from 'react-typing-effect'
import Header from '../layout/Header'
import MobileNav from '../navigation/mobilenav'
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { useEffect } from 'react'
import DevelopmentHook from '../../hooks/developments.hooks.js'
import SavedRoadmapContext from '../../Context/savedRoadmap.context.js'
import { Bookmark } from 'lucide-react';
import { toast } from 'sonner';
import { ROUTES } from '../../constants/routes';
import Loading from '../../utils/loading.js';

// const developmentCards = [
//     {
//         title: "AI and Machine Learning Development",
//         description: "AI (Artificial Intelligence) and ML (Machine Learning) involve creating systems that perform tasks requiring human intelligence, like learning and problem-solving. These technologies develop algorithms for computers to learn from data.",


//         route: "AIML"
//     },
//     {
//         title: "Full Stack Web Development",
//         description: "Web Development includes front-end (client-side) and back-end (server-side) work, creating functional websites. The future is bright with AI advancements and high demand for responsive, user-friendly designs.",


//         route: "webdev"
//     },
//     {
//         title: "Frontend Web Development",
//         description: "Frontend development involves building the user-facing part of web applications using technologies like HTML, CSS, and JavaScript. It focuses on creating responsive, interactive, and visually appealing interfaces that enhance the user experience.",


//         route: "frontend-web-dev"
//     },
//     {
//         title: "Backend Web Development",
//         description: "Backend development involves creating and maintaining the server-side logic, databases, and APIs that power web applications. It focuses on ensuring the application's functionality, security, and performance behind the scenes.",


//         route: "backend"
//     },
//     {
//         title: "App Development",
//         description: "App Development involves creating applications for mobile and desktop platforms. It covers both front-end (user interface) and back-end (server-side) development.",


//         route: "appdev"
//     },

//     // {
//     //     title: "iOS App Development",
//     //     description: "iOS app development involves creating applications for Apple's iOS platform using languages like Swift or Objective-C. It focuses on delivering seamless, high-quality experiences for iPhone and iPad users.",


//     //     route: "ios"
//     // },
//     // {
//     //     title: "Android App Development",
//     //     description: "Android app development involves creating applications for devices running on the Android operating system using languages like Java or Kotlin. It focuses on delivering robust, user-friendly experiences for a wide range of Android smartphones and tablets.",


//     //     route: "android"
//     // },


//     {
//         title: "Game Development",
//         description: "Game Development involves creating interactive games, blending art, storytelling, and coding. It's a dynamic field with growing opportunities thanks to advances in VR and AR technologies.",


//         route: "gamedev"
//     },
//     {
//         title: "CyberSecurity",
//         description: "Cybersecurity involves protecting computer systems, networks, and data from digital attacks and unauthorized access. It focuses on implementing security measures and mitigating threats to ensure information integrity and confidentiality.",


//         route: "cybersecurity"
//     },
//     {
//         title: "Blockchain Development",
//         description: "Blockchain is a decentralized, digital ledger technology that records transactions across multiple computers. It ensures transparency, security, and immutability, making it ideal for applications like cryptocurrencies, smart contracts, and supply chain management.",


//         route: "blockchain"
//     },
//     {
//         title: "Cloud Computing and DevOps",
//         description: "Cloud Computing delivers scalable computing services like servers, storage, and software over the internet. DevOps combines software development and IT operations to enhance collaboration and automation, ensuring continuous delivery.",


//         route: "devopscloud"
//     },
//     {
//         title: "Data Science",
//         description: "Data science involves extracting meaningful insights from large and complex datasets using statistical methods, programming, and domain knowledge. It focuses on discovering patterns and making predictions through data analysis and machine learning techniques.",


//         route: "datascience"
//     },
//     // {
//     //     title: "Virtual Reality (VR)",
//     //     description: "Virtual Reality (VR) creates immersive, simulated environments that users can interact with in a seemingly real way. It leverages advanced technology to provide experiences in gaming, education, and more through specialized headsets and sensors.",


//     //     route: "vr"
//     // },
//     // {
//     //     title: "Augmented Reality (AR)",
//     //     description: "Augmented Reality (AR) overlays digital content onto the real world, enhancing users' perception of their environment. It uses smartphones and AR glasses to provide interactive and immersive experiences in various applications.",


//     //     route: "ar"
//     // },
//     {
//         title: "Internet of Things (IoT) Development",
//         description: "IoT development involves creating and integrating connected devices that communicate over the internet. It requires knowledge in hardware, software, and networking to build smart solutions for homes, cities, healthcare, and industries.",


//         route: "iot"
//     },
//     {
//         title: "Big Data Development",
//         description: "Big Data Development involves designing and building systems to process and analyze large volumes of data. It focuses on utilizing tools and technologies to handle data storage, processing, and analytics for businesses to derive insights.",


//         route: "bigdata"
//     }
// ];



export default function Development() {

    const { savedRoadmap, deleteSavedRoadmap, getSavedRoadmapByUser } = React.useContext(SavedRoadmapContext);






    const navigate = useNavigate();
    const location = useLocation();

    const [savedMap, setSavedMap] = useState({});
    const routerhander = (name) => {
      navigate(`${ROUTES.DEVELOPMENT}/${name}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
    }, [location]);

    useEffect(() => {
        const fetchSaved = async () => {
            const saved = await getSavedRoadmapByUser();
            const map = {};

            saved?.forEach(item => {
                map[item.roadmapRoute] = true;    // mark saved
            });

            setSavedMap(map);
        };

        fetchSaved();
    }, []);

    //fetching the roadmap data from the backend
    const { data: developmentCards, loading, error } = DevelopmentHook();
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <h2 className='text-white'>Something went wrong!</h2>
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

    return (
        <section className="flex flex-col xl:w-[80%] w-[100%] h-[100%] gap-4">
            <div className='flex justify-center p-4'>

                <Header />
            </div>
            <main className='p-4'>
                <div className="development flex flex-col gap-4">
                    <div className=" flex flex-col gap-1 border-gray-500">
                        <h2 className="text-white font-bold text-3xl flex flex-col">
                            <span>Hello</span>
                            <TypingEffect text={['Web Developers', 'Game Developers', 'App Developers']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={1000} />
                        </h2>
                        <h4 className="text-purple-400 text-xl">
                            Your Ultimate Guide to Mastering Development Comprehensive Roadmaps for Every Aspiring Developer.

                            Explore, Learn, and Grow with detailed, step-by-step guides Tailored for your journey in the world of tech.
                        </h4>
                    </div>
                    <div className="development-container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4 border-t-2">
                        {developmentCards.map((card) => (
                            <div
                                key={card.id}
                                className="relative group bg-white rounded-xl flex flex-col justify-between shadow-xl overflow-hidden transform transition-all duration-500 sm:hover:scale-105 hover:shadow-2xl"
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

                                        <Bookmark fill={savedMap[card.route] ? 'black' : 'none'}/>
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
                </div>
            </main>
            <Footer />
            <MobileNav />
        </section>
    )
} 
