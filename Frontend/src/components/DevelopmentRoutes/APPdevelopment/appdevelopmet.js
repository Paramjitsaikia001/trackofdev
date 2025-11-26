import { useState } from "react";
import Header from "../../layout/Header";

// Import roadmap detail pages (you can create each one later)
import FoundationsPage from "../APPdevelopment/FoundationsPage";
import FrameworksPage from "./FrameworksPage";
import UIStylingPage from "../APPdevelopment/UIStylingPage";
import StateManagementPage from "../APPdevelopment/StateManagementPage";
import NavigationRoutingPage from "../APPdevelopment/NavigationPage";
import APIsNetworkingPage from "../APPdevelopment/APIsNetworkingPage";
import NativeModulesPage from "../APPdevelopment/NativeModulesPage";
import AuthSecurityPage from "../APPdevelopment/AuthSecurityPage";
import TestingDebuggingPage from "../APPdevelopment/TestingDebuggingPage";
import PerformancePage from "../APPdevelopment/PerformancePage";
import DeploymentPage from "../APPdevelopment/DeploymentPage";
import AdvancedTopicsPage from "../APPdevelopment/AdvancedTopicsPage";
import ProjectIdeaPage from "../APPdevelopment/ProjectIdea"
import FullresourcePage from "../APPdevelopment/Fullresource"
import Development from "../../../hooks/developments.hooks"
import Reviews from "../../forms/Review";
import ActivityContext from "../../../Context/activity.context";
import {useContext} from "react"
import {toast} from "sonner"
import MobileNav from "../../navigation/mobilenav";

export default function CrossPlatformRoadmap() {
  const [activeId, setActiveId] = useState(null);
  const {createActivity} = useContext(ActivityContext);
  // Modal states
  const [showFoundations, setFoundations] = useState(false);
  const [showFrameworks, setFrameworks] = useState(false);
  const [showUIStyling, setUIStyling] = useState(false);
  const [showStateManagement, setStateManagement] = useState(false);
  const [showNavigation, setNavigation] = useState(false);
  const [showAPIsNetworking, setAPIsNetworking] = useState(false);
  const [showNativeModules, setNativeModules] = useState(false);
  const [showAuthSecurity, setAuthSecurity] = useState(false);
  const [showTestingDebugging, setTestingDebugging] = useState(false);
  const [showPerformance, setPerformance] = useState(false);
  const [showDeployment, setDeployment] = useState(false);
  const [showAdvancedTopics, setAdvancedTopics] = useState(false);
  const [showProjectIdeas, setProjectIdeas] = useState(false);
  const [showFullResources, setFullResources] = useState(false);


  // Handlers
  const handleFoundations = () => setFoundations(!showFoundations);
  const handleFrameworks = () => setFrameworks(!showFrameworks);
  const handleUIStyling = () => setUIStyling(!showUIStyling);
  const handleStateManagement = () => setStateManagement(!showStateManagement);
  const handleNavigation = () => setNavigation(!showNavigation);
  const handleAPIsNetworking = () => setAPIsNetworking(!showAPIsNetworking);
  const handleNativeModules = () => setNativeModules(!showNativeModules);
  const handleAuthSecurity = () => setAuthSecurity(!showAuthSecurity);
  const handleTestingDebugging = () => setTestingDebugging(!showTestingDebugging);
  const handlePerformance = () => setPerformance(!showPerformance);
  const handleDeployment = () => setDeployment(!showDeployment);
  const handleAdvancedTopics = () => setAdvancedTopics(!showAdvancedTopics);
  const handleProjectIdeas = () => setProjectIdeas(!showProjectIdeas);
  const handleFullResources = () => setFullResources(!showFullResources);

  const handlers = {
    handleFoundations,
    handleFrameworks,
    handleUIStyling,
    handleStateManagement,
    handleNavigation,
    handleAPIsNetworking,
    handleNativeModules,
    handleAuthSecurity,
    handleTestingDebugging,
    handlePerformance,
    handleDeployment,
    handleAdvancedTopics,
    handleProjectIdeas,
    handleFullResources
  };


  const {data:roadmap,loading,error} = Development()
        
        const APPRoadmap=roadmap?.[4]?.roadmapSteps
        if(loading){
            return <h1>loading</h1>
        }
         if (error) {
            return <h2 className='text-white'>Something went wrong!</h2>
        }

             const AddActivity=async(id)=>{
            // console.log({roadmpStepsId:roadmap?.[0].roadmapSteps[id].name,roadmapId:roadmap?.[4].title})
            
            try{
                const res = await createActivity({roadmpStepsId:roadmap?.[4].roadmapSteps[id]?.name,roadmapId:roadmap?.[4].route})
                toast.success(`${roadmap?.[4].roadmapSteps[id].name} completed successfully!`)
                console.log("res", res);
                
            }catch(err){
                console.log(err);
            }
        }
  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
      {/* Modals */}
      {showFoundations && <FoundationsPage closeFoundation={handleFoundations}  Done={()=>AddActivity(0)}/>}
      {showFrameworks && <FrameworksPage closeFrameworks={handleFrameworks} Done={()=>AddActivity(1)}/>}
      {showUIStyling && <UIStylingPage closeUIStyling={handleUIStyling} Done={()=>AddActivity(2)}/>}
      {showStateManagement && <StateManagementPage closeState={handleStateManagement} Done={()=>AddActivity(3)}/>}
      {showNavigation && <NavigationRoutingPage closeNavigation={handleNavigation} Done={()=>AddActivity(4)}/>}
      {showAPIsNetworking && <APIsNetworkingPage closeAPIs={handleAPIsNetworking} Done={()=>AddActivity(5)}/>}
      {showNativeModules && <NativeModulesPage closeNative={handleNativeModules} Done={()=>AddActivity(6)}/>}
      {showAuthSecurity && <AuthSecurityPage closeAuth={handleAuthSecurity} Done={()=>AddActivity(7)}/>}
      {showTestingDebugging && <TestingDebuggingPage closeTesting={handleTestingDebugging} Done={()=>AddActivity(8)}/>}
      {showPerformance && <PerformancePage closePerformance={handlePerformance} Done={()=>AddActivity(9)}/>}
      {showDeployment && <DeploymentPage closeDeployment={handleDeployment} Done={()=>AddActivity(10)}/>}
      {showAdvancedTopics && <AdvancedTopicsPage closeAdvanced={handleAdvancedTopics} Done={()=>AddActivity(11)}/>}
      {showProjectIdeas && <ProjectIdeaPage closeProjects={handleProjectIdeas} Done={()=>AddActivity(12)}/>}
      {showFullResources && <FullresourcePage closeFullResources={handleFullResources} Done={()=>AddActivity(13)}/>}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>CROSS-PLATFORM APP DEVELOPMENT</h1>
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
          {APPRoadmap.map((item) => (
            <div
              key={item.id}
              className={`flex items-center w-full my-4 ${
                item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
              }`}
            >
              <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem]`}>
                <div
                  className={`flex items-center w-full ${
                    item.id % 2 === 0
                      ? "sm:justify-start"
                      : "sm:justify-start sm:flex-row-reverse"
                  }`}
                >
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
                    <h4 className="text-lg text-center font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <div
                      className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${
                        activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                      }`}
                    >
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
      <div
       onClick={handleFullResources}
      className="fixed bottom-[5rem] md:bottom-1 right-1 z-10">
        <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
          full course Resource
          <span className="material-symbols-outlined">text_snippet</span>
        </button>
      </div>
      <Reviews/>
      <MobileNav />
    </section>
  );
}
