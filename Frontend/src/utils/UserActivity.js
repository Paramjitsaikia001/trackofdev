import React, { useContext, useEffect, useState, useMemo } from 'react';
import ActivityContext from '../Context/activity.context';
import {
    X,
    ChevronRight,
    Activity,
    Calendar,
    CheckCircle2,
    Clock,
    Map
} from 'lucide-react';

import Development from "../hooks/developments.hooks.js";
import Loading from './loading.js';

const UserActivity = () => {
    const { getActivityByUser } = useContext(ActivityContext);
    const [activities, setActivities] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [loading, setLoading] = useState(true);
        const { data: developemntID } = Development();
    const developments = Array.isArray(developemntID)
        ? developemntID
        : Array.isArray(developemntID?.data)
            ? developemntID.data
            : Array.isArray(developemntID?.results)
                ? developemntID.results
                : [];


    const grouped = useMemo(() => {
        return activities.reduce((acc, item) => {
            // const key = item.roadmapId?.title || item.roadmapId || 'Unknown Roadmap';
                        const roadmapData = developments.find(dev => dev.route 
                         === item?.roadmapId );
                        console.log("roadmapdata",roadmapData);
                        
            const key = roadmapData?.title || item.roadmapId?.title || 'Unknown Roadmap';
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});
    }, [activities]);

    useEffect(() => {
        const fetchUserActivity = async () => {
            setLoading(true);
            try {
                const res = await getActivityByUser();
                const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setActivities(sorted);
            } catch (error) {
                console.error("Failed to fetch activities", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserActivity();
    }, []);

    const toggleRoadmap = (roadmapTitle) => {
        setActiveId(prev => prev === roadmapTitle ? null : roadmapTitle);
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className=" mx-auto p-6  w-[100%]  md:h-full h-screen">

            {Object.keys(grouped).length > 0 ? (
                <div className="space-y-4">
                    {Object.keys(grouped).map((roadmapTitle) => {
                        const isActive = activeId === roadmapTitle;
                        const groupItems = grouped[roadmapTitle];
                        const lastActive = new Date(groupItems[0].createdAt).toLocaleDateString();

                        return (
                            <div
                                key={roadmapTitle}
                                className={`
                                    bg-white/60 text-black rounded-2xl transition-all duration-300 border border-slate-200 overflow-hidden
                                    ${isActive ? 'shadow-lg ring-1 ring-blue-100' : 'shadow-sm hover:shadow-md'}
                                `}
                            >
                                <div
                                    className="p-5 cursor-pointer flex items-center justify-between group"
                                    onClick={() => toggleRoadmap(roadmapTitle)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`
                                            p-3 rounded-xl transition-colors
                                            ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'}
                                        `}>
                                            <Map size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                                {roadmapTitle}
                                            </h4>
                                            <div className="flex items-center gap-3 text-xs  mt-1">
                                                <span className="flex items-center gap-1">
                                                    <Activity size={12} />
                                                    {groupItems.length} steps
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    Last: {lastActive}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className={`
                                            text-slate-400 transition-transform duration-300
                                            ${isActive ? 'rotate-90 text-blue-600' : 'group-hover:text-slate-600'}
                                        `}
                                    >
                                        {isActive ? <X size={20} /> : <ChevronRight size={20} />}
                                    </button>
                                </div>

                                <div className={`
                                    transition-all duration-500 ease-in-out
                                    ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                                `}>
                                    <div className="p-5 pt-0 bg-slate-50/50">
                                        <div className="relative pl-4 sm:pl-8 py-4">
                                            <div className="absolute left-[27px] sm:left-[43px] top-4 bottom-4 w-0.5 bg-slate-200"></div>

                                            <div className="space-y-6">
                                                {groupItems.map((step, index) => (
                                                    <div key={step.id || index} className="relative flex items-start gap-4">
                                                        <div className={`
                                                            relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center
                                                            ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white border-slate-200 text-slate-400'}
                                                        `}>
                                                            {index === 0 ? (
                                                                <Clock size={14} />
                                                            ) : (
                                                                <CheckCircle2 size={14} className="text-emerald-500" />
                                                            )}
                                                        </div>

                                                        <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                                            <div className="flex justify-between items-start mb-1">
                                                                <h5 className="font-semibold text-slate-800 text-sm sm:text-base">
                                                                    {step.stepTitle || step.roadmpStepsId || "Untitled Step"}
                                                                </h5>
                                                                <span className="text-[10px] sm:text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full whitespace-nowrap">
                                                                    {new Date(step.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                                                {new Date(step.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
             <p className="text-center text-white mt-10">No activity found.</p>
            )}
        </div>
    );
};

export default UserActivity;

