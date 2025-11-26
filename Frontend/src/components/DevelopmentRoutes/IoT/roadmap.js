import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";

// Placeholder imports for each roadmap step page
import FoundationsPage from "../IoT/Foundations";
import MicrocontrollersPage from "../IoT/Microcontrollers";
import SensorsPage from "../IoT/Sensors";
import ProtocolsPage from "../IoT/Protocols";
import NetworkingPage from "../IoT/Networking";
import EmbeddedOSPage from "../IoT/EmbeddedOS";
import CloudPlatformsPage from "../IoT/CloudPlatforms";
import DataProcessingPage from "../IoT/DataProcessing";
import EdgeComputingPage from "../IoT/EdgeComputing";
import SecurityPage from "../IoT/Security";
import ApplicationPage from "../IoT/Application";
import IndustrialIoTPage from "../IoT/IndustrialIoT";
import ProjectsPage from "../IoT/Projects";
import CareerPage from "../IoT/Career";
import Fullresource from "../IoT/Fullresource";
import Development from "../../../hooks/developments.hooks";

import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";

export default function IoT() {
  const [activeId, setActiveId] = useState(null);

  // Activity context
  const { createActivity } = useContext(ActivityContext);

  // Modal states for each step
  const [showFoundations, setShowFoundations] = useState(false);
  const [showMicrocontrollers, setShowMicrocontrollers] = useState(false);
  const [showSensors, setShowSensors] = useState(false);
  const [showProtocols, setShowProtocols] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showEmbeddedOS, setShowEmbeddedOS] = useState(false);
  const [showCloudPlatforms, setShowCloudPlatforms] = useState(false);
  const [showDataProcessing, setShowDataProcessing] = useState(false);
  const [showEdgeComputing, setShowEdgeComputing] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [showIndustrialIoT, setShowIndustrialIoT] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCareer, setShowCareer] = useState(false);
  const [showFullResource, setFullResource] = useState(false);

  // Handlers for each step
  const handlers = {
    handleFoundations: () => setShowFoundations(!showFoundations),
    handleMicrocontrollers: () => setShowMicrocontrollers(!showMicrocontrollers),
    handleSensors: () => setShowSensors(!showSensors),
    handleProtocols: () => setShowProtocols(!showProtocols),
    handleNetworking: () => setShowNetworking(!showNetworking),
    handleEmbeddedOS: () => setShowEmbeddedOS(!showEmbeddedOS),
    handleCloudPlatforms: () => setShowCloudPlatforms(!showCloudPlatforms),
    handleDataProcessing: () => setShowDataProcessing(!showDataProcessing),
    handleEdgeComputing: () => setShowEdgeComputing(!showEdgeComputing),
    handleSecurity: () => setShowSecurity(!showSecurity),
    handleApplication: () => setShowApplication(!showApplication),
    handleIndustrialIoT: () => setShowIndustrialIoT(!showIndustrialIoT),
    handleProjects: () => setShowProjects(!showProjects),
    handleCareer: () => setShowCareer(!showCareer),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  const { data: roadmap, loading, error } = Development();

  const iOTRoadmap = roadmap?.[10]?.roadmapSteps ?? [];
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h2 className="text-white">Something went wrong!</h2>;
  }

  // AddActivity: record completed step via ActivityContext
  const AddActivity = async (id) => {
    try {
      if (!iOTRoadmap?.[id]) {
        console.warn("AddActivity: invalid step id", id);
        return;
      }
      const stepName = iOTRoadmap[id].name;
      const roadmapId = roadmap?.[10]?.route ?? roadmap?.[10]?.title ?? "iot";
      await createActivity({
        roadmpStepsId: stepName,
        roadmapId: roadmapId,
      });
      toast.success(`${stepName} completed successfully!`);
    } catch (err) {
      console.error("AddActivity error", err);
      toast.error("Failed to record activity");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
      {/* Modals */}
      {showFoundations && <FoundationsPage closeFoundations={handlers.handleFoundations} Done={() => AddActivity(0)} />}
      {showMicrocontrollers && <MicrocontrollersPage closeMicrocontrollers={handlers.handleMicrocontrollers} Done={() => AddActivity(1)} />}
      {showSensors && <SensorsPage closeSensors={handlers.handleSensors} Done={() => AddActivity(2)} />}
      {showProtocols && <ProtocolsPage closeProtocols={handlers.handleProtocols} Done={() => AddActivity(3)} />}
      {showNetworking && <NetworkingPage closeNetworking={handlers.handleNetworking} Done={() => AddActivity(4)} />}
      {showEmbeddedOS && <EmbeddedOSPage closeEmbeddedOS={handlers.handleEmbeddedOS} Done={() => AddActivity(5)} />}
      {showCloudPlatforms && <CloudPlatformsPage closeCloudPlatforms={handlers.handleCloudPlatforms} Done={() => AddActivity(6)} />}
      {showDataProcessing && <DataProcessingPage closeDataProcessing={handlers.handleDataProcessing} Done={() => AddActivity(7)} />}
      {showEdgeComputing && <EdgeComputingPage closeEdgeComputing={handlers.handleEdgeComputing} Done={() => AddActivity(8)} />}
      {showSecurity && <SecurityPage closeSecurity={handlers.handleSecurity} Done={() => AddActivity(9)} />}
      {showApplication && <ApplicationPage closeApplication={handlers.handleApplication} Done={() => AddActivity(10)} />}
      {showIndustrialIoT && <IndustrialIoTPage closeIndustrialIoT={handlers.handleIndustrialIoT} Done={() => AddActivity(11)} />}
      {showProjects && <ProjectsPage closeProjects={handlers.handleProjects} Done={() => AddActivity(12)} />}
      {showCareer && <CareerPage closeCareer={handlers.handleCareer} Done={() => AddActivity(13)} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>IOT DEVELOPMENT ROADMAP</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {iOTRoadmap.map((item) => (
            <div
              key={item.id}
              className={`flex items-center w-full my-4 ${item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
                }`}
            >
              <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem]`}>
                <div
                  className={`flex items-center w-full ${item.id % 2 === 0 ? "sm:justify-start" : "sm:justify-start sm:flex-row-reverse"
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
                    <h4 className="text-lg text-center font-semibold text-gray-800">{item.name}</h4>
                    <div
                      className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                        }`}
                    >
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">{item.des}</p>
                    </div>
                    <div className={`sm:hidden block transition-all duration-500 ease-in-out`}>
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">{item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Resources Button */}
      <div onClick={handlers.handleFullResource} className="fixed bottom-[5rem] md:bottom-1 right-1 z-10">
        <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
          full course Resource
          <span className="material-symbols-outlined">text_snippet</span>
        </button>
      </div>
      <MobileNav />
    </section>
  );
}