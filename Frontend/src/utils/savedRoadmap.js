import React, { useContext, useEffect, useState } from 'react'
import SavedRoadmapContext from '../Context/savedRoadmap.context'
import RoadmapDetailContext from '../Context/fetchRoadmap.context'
import { Bookmark } from 'lucide-react';
import Loading from './loading';
const SavedRoadmaps = () => {

    const { getSavedRoadmapByUser, deleteSavedRoadmap, savedRoadmap: savedRoadmapData, loading } = useContext(SavedRoadmapContext)
    const { getRoadmapdetails } = useContext(RoadmapDetailContext)
    const [savedRoadmap, setSavedRoadmap] = useState([])
    const [roadmapDetails, setRoadmapDetails] = useState([]);
    const [savedMap, setSavedMap] = useState({});



    useEffect(() => {
        const fetchRoadmaps = async () => {
            const res = await getSavedRoadmapByUser();
            if (!res) return;

            setSavedRoadmap(res);

            const details = {};

            for (const item of res) {
                const data = await getRoadmapdetails(item.roadmapRoute);
                details[item.roadmapRoute] = data;

            }


            setRoadmapDetails(details);
        };

        fetchRoadmaps();
    }, []);

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

    const roadmapsavedHandler = async (roadmapRoute) => {
        if (savedMap[roadmapRoute]) {
            const res = await deleteSavedRoadmap({ roadmapRoute });
            if (res?.success) {
                setSavedMap(prev => ({ ...prev, [roadmapRoute]: false }));

                setSavedRoadmap(prev => prev.filter(item => item.roadmapRoute !== roadmapRoute));

                setRoadmapDetails(prev => {
                    const updated = { ...prev };
                    delete updated[roadmapRoute];
                    return updated;
                });

                alert('Removed from saved roadmaps');
            }
        } else {
            // not saved → save
            const res = await savedRoadmap({ roadmapRoute });
            if (res?.success) {
                setSavedMap(prev => ({ ...prev, [roadmapRoute]: true }));
                alert('Saved to your roadmaps');
            }
        }
    }
    if (loading) {
        return (
            <Loading />
        );
    }
    return (
        <section className="min-h-screen ">

            <div className="savedroadmaps  w-[100%]  md:h-full h-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">



                {savedRoadmap.map((item) => {
                    const detail = roadmapDetails[item.roadmapRoute];

                    return (
                        // <div key={item.id}>
                        //     <h2>{item.roadmapRoute}</h2>

                        //     {!detail && <p>Loading...</p>}

                        //     {detail && (
                        //         <>
                        //             <h3>{detail.title}</h3>
                        //             <p>{detail.description}</p>

                        //             <h4>Steps:</h4>
                        //             <ul>
                        //                 {detail.roadmapSteps?.map((step, index) => (
                        //                     <li key={index}>{step.title}</li>
                        //                 ))}
                        //             </ul>
                        //         </>
                        //     )}
                        // </div>
                        <div
                            key={item.id}
                            className="relative group  bg-white/60  rounded-xl flex flex-col justify-between shadow-xl overflow-hidden transform transition-all duration-500  cursor-pointer     "



                        >
                            {/* heading  */}
                            <div className='p-6'>
                                <div className="flex items-baseline justify-between">

                                    <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">{detail?.title}</h3>
                                    {/* Icon */}
                                    <span
                                        onClick={() => roadmapsavedHandler(detail?.route)}
                                        className={`text-[2.5rem] font-light cursor-pointer `}>

                                        <Bookmark fill={savedMap[detail?.route] ? 'black' : 'none'} />
                                    </span>
                                </div>
                                <p className="text-black/70 text-sm leading-relaxed mb-6">{detail?.description}</p>
                            </div>

                        </div >
                    );
                })}
            </div>
        </section>

    )
}

export default SavedRoadmaps