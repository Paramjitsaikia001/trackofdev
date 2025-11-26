import { useContext, useState } from "react";
import Header from "../../layout/Header";
import PythonPage from "./Pythonpage";
import MathematicalPage from "./Mathematical";
import MLlibandalgPage from "./MLLibandalg";
import DataManiAndVisuPage from "./DataManiAndVisu";
import NeuralNetworksPage from "./NauandDP";
import NLPPage from "./NeuralandProcess";
import ComputerVisionPage from "./ComputerVission";
import EthicsAIPage from "./ERAI";
import Fullresource from "./FullResource";
import Development from "../../../hooks/developments.hooks";
import Reviews from "../../forms/Review";
import ActivityContext from "../../../Context/activity.context";
import MobileNav from "../../navigation/mobilenav";
import {toast} from "sonner"


export default function AiMl() {
    const [activeId, setActiveId] = useState(null);
    const {createActivity} = useContext(ActivityContext);

    // Modal states
    const [pythonpage, setPythonpage] = useState(false);
    const [Mathematical, setMathematical] = useState(false);
    const [MLLinandAlgPage, setMLLinandAlgPage] = useState(false);
    const [DataManiAndVisu, setDataManiAndVisu] = useState(false);
    const [NeuralNetworks, setNeuralNetworks] = useState(false);
    const [showNLPPage, setNLPPage] = useState(false);
    const [showcomputervission, setcomputervission] = useState(false);
    const [showEthicsAIPage, setEthicsAIPage] = useState(false);
     const [showfullresource, setFullResource] = useState(false);

    // Handlers
    const handlePythonPage = () => setPythonpage(!pythonpage);
    const handleMathematical = () => setMathematical(!Mathematical);
    const handleMLLinandAlgPage = () => setMLLinandAlgPage(!MLLinandAlgPage);
    const handleDataManiAndVisu = () => setDataManiAndVisu(!DataManiAndVisu);
    const handleNeuralNetworks = () => setNeuralNetworks(!NeuralNetworks);
    const NLPhandler = () => setNLPPage(!showNLPPage);
    const computervisionHandler = () => setcomputervission(!showcomputervission);
    const EthicsAIHandler = () => setEthicsAIPage(!showEthicsAIPage);
    const fullresourcehandler = () => setFullResource(!showfullresource);

    const handlers = {
        handlePythonPage,
        handleMathematical,
        handleMLLinandAlgPage,
        handleDataManiAndVisu,
        handleNeuralNetworks,
        NLPhandler,
        computervisionHandler,
        EthicsAIHandler,
        fullresourcehandler
    };


        const {data:roadmap,loading,error} = Development()
        // console.log("Roadmap data:", roadmap?.[0]?.roadmapSteps);
        const AIMLRoadmap=roadmap?.[0]?.roadmapSteps
        if(loading){
            return <h1>loading</h1>
        }
         if (error) {
            return <h2 className='text-white'>Something went wrong!</h2>
        }

      

        const AddActivity=async(id)=>{
            console.log({roadmpStepsId:roadmap?.[0].roadmapSteps[id].name,roadmapId:roadmap?.[0].title})
            
            try{
                const res = await createActivity({roadmpStepsId:roadmap?.[0].roadmapSteps[id].name,roadmapId:roadmap?.[0].route})
                toast.success(`${roadmap?.[0].roadmapSteps[id].name} completed successfully!`)
                console.log("res", res);
                
            }catch(err){
                console.log(err);
            }
        }
    return (
        <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
            {/* Modals */}
            {pythonpage && <PythonPage closePython={handlePythonPage} Done={()=>AddActivity(0)
            } />}
            {Mathematical && <MathematicalPage closeMathematical={handleMathematical} Done={()=>AddActivity(1)
            }/>}
            {MLLinandAlgPage && <MLlibandalgPage closeMLLibandalg={handleMLLinandAlgPage} Done={()=>AddActivity(2)
            }/>}
            {DataManiAndVisu && <DataManiAndVisuPage closeDataManiAndVisu={handleDataManiAndVisu} Done={()=>AddActivity(3)
            }/>}
            {NeuralNetworks && <NeuralNetworksPage closeNeuralNetworks={handleNeuralNetworks} Done={()=>AddActivity(4)
            }/>}
            {showNLPPage && <NLPPage closeNLP={NLPhandler} Done={()=>AddActivity(5)
            }/>}
            {showcomputervission && <ComputerVisionPage closeComputerVision={computervisionHandler} Done={()=>AddActivity(6)
            }/>}
            {showEthicsAIPage && <EthicsAIPage closeEthicsAI={EthicsAIHandler} Done={()=>AddActivity(7)
            }/>}
            {showfullresource && <Fullresource closeFullResources={() => setFullResource(false)} Done={()=>AddActivity(8)
            }/>}

            <div className='flex justify-center p-4 w-[100%]'>
                <Header />
            </div>

            {/* header */}
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>AI ML DEVELOPMENT</h1>
                <div className="relative inline-block">
                    <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">
                        help
                    </span>
                </div>
            </div>

            {/* Roadmap timeline */}
            <div className="conater relative w-full h-full">
                <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
                <div className="flex flex-col justify-center w-full">
                    {AIMLRoadmap.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center w-full my-4 ${item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"}`}
                        >
                            <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem]`}>
                                <div className={`flex items-center w-full ${item.id % 2 === 0 ? "sm:justify-start" : "sm:justify-start sm:flex-row-reverse"}`}>
                                    <div className="line w-[2rem] h-1 bg-white"></div>
                                    <div
                                        onClick={() => {
                                            if (item.handler) {
                                                handlers[item.handler]?.();
                                            }
                                        }}
                                        className={`relative w-[80%] sm:h-[5rem] text-center rounded-xl cursor-pointer bg-[#eeeeeedd] py-4 px-2 hover:bg-[#9aa3f6] transition-all duration-300`}
                                        onMouseEnter={() => setActiveId(item.id)}
                                        onMouseLeave={() => setActiveId(null)}
                                    >
                                        <h4 className="text-lg text-center font-semibold text-gray-800">{item.name}</h4>
                                        <div className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"}`}>
                                            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                {item.des}
                                            </p>
                                        </div>
                                        <div className={`sm:hidden block transition-all duration-500 ease-in-out`}>
                                            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                {item.des}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Resources Button */}
            <div className="fixed bottom-[5rem] md:bottom-1 right-1 z-10">
                <button onClick={fullresourcehandler} className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
                    full course Resource
                    <span className="material-symbols-outlined">
                        text_snippet
                    </span>
                </button>
            </div>
            <Reviews/>
            <MobileNav />
        </section>
    );
}