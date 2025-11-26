import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";

// Placeholder imports for each roadmap step page
// You would need to create these components (e.g., LinuxPage, ProgrammingPage)
// following the same pattern as your Blockchain pages.
import LinuxPage from "../CloudDevOps/Linux";
import ProgrammingPage from "../CloudDevOps/Programming";
import CoreConceptsPage from "../CloudDevOps/CoreConcepts";
import GitPage from "../CloudDevOps/Git";
import CloudFundamentalsPage from "../CloudDevOps/CloudFundamentals";
import IaCPage from "../CloudDevOps/IaC";
import ContainersPage from "../CloudDevOps/Containers";
import CICDPage from "../CloudDevOps/CICD";
import ConfigManagementPage from "../CloudDevOps/ConfigManagement";
import MonitoringPage from "../CloudDevOps/Monitoring";
import AdvancedCloudPage from "../CloudDevOps/AdvancedCloud";
import SREPage from "../CloudDevOps/SRE";
import FinOpsPage from "../CloudDevOps/FinOps";
import CertificationsPage from "../CloudDevOps/Certifications";
import Fullresource from "../CloudDevOps/Fullresource";
import Development from "../../../hooks/developments.hooks";

import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";



export default function DevOps() {
  const [activeId, setActiveId] = useState(null);
  const { createActivity } = useContext(ActivityContext);

  // Modal states for each step
  const [showLinux, setShowLinux] = useState(false);
  const [showProgramming, setShowProgramming] = useState(false);
  const [showCoreConcepts, setShowCoreConcepts] = useState(false);
  const [showGit, setShowGit] = useState(false);
  const [showCloudFundamentals, setShowCloudFundamentals] = useState(false);
  const [showIaC, setShowIaC] = useState(false);
  const [showContainers, setShowContainers] = useState(false);
  const [showCICD, setShowCICD] = useState(false);
  const [showConfigManagement, setShowConfigManagement] = useState(false);
  const [showMonitoring, setShowMonitoring] = useState(false);
  const [showAdvancedCloud, setShowAdvancedCloud] = useState(false);
  const [showSRE, setShowSRE] = useState(false);
  const [showFinOps, setShowFinOps] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showFullResource, setFullResource] = useState(false);


  // Handlers for each step
  const handlers = {
    handleLinux: () => setShowLinux(!showLinux),
    handleProgramming: () => setShowProgramming(!showProgramming),
    handleCoreConcepts: () => setShowCoreConcepts(!showCoreConcepts),
    handleGit: () => setShowGit(!showGit),
    handleCloudFundamentals: () => setShowCloudFundamentals(!showCloudFundamentals),
    handleIaC: () => setShowIaC(!showIaC),
    handleContainers: () => setShowContainers(!showContainers),
    handleCICD: () => setShowCICD(!showCICD),
    handleConfigManagement: () => setShowConfigManagement(!showConfigManagement),
    handleMonitoring: () => setShowMonitoring(!showMonitoring),
    handleAdvancedCloud: () => setShowAdvancedCloud(!showAdvancedCloud),
    handleSRE: () => setShowSRE(!showSRE),
    handleFinOps: () => setShowFinOps(!showFinOps),
    handleCertifications: () => setShowCertifications(!showCertifications),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  const { data: roadmap, loading, error } = Development()

  const CloudRoadmap = roadmap?.[8]?.roadmapSteps
  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <h2 className='text-white'>Something went wrong!</h2>
  }

  // AddActivity: mark a roadmap step completed (records activity via context)
  const AddActivity = async (id) => {
    try {
      if (!CloudRoadmap?.[id]) {
        console.warn("AddActivity: invalid step id", id);
        return;
      }
      const stepName = CloudRoadmap[id].name;
      const roadmapId = roadmap?.[8]?.route ?? roadmap?.[8]?.title ?? "cloud-devops";
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
      {showLinux && <LinuxPage closeLinux={handlers.handleLinux} Done={() => AddActivity(0)} />}
      {showProgramming && <ProgrammingPage closeProgramming={handlers.handleProgramming} Done={() => AddActivity(1)} />}
      {showCoreConcepts && <CoreConceptsPage closeCoreConcepts={handlers.handleCoreConcepts} Done={() => AddActivity(2)} />}
      {showGit && <GitPage closeGit={handlers.handleGit} Done={() => AddActivity(3)} />}
      {showCloudFundamentals && <CloudFundamentalsPage closeCloudFundamentals={handlers.handleCloudFundamentals} Done={() => AddActivity(4)} />}
      {showIaC && <IaCPage closeIaC={handlers.handleIaC} Done={() => AddActivity(5)} />}
      {showContainers && <ContainersPage closeContainers={handlers.handleContainers} Done={() => AddActivity(6)} />}
      {showCICD && <CICDPage closeCICD={handlers.handleCICD} Done={() => AddActivity(7)} />}
      {showConfigManagement && <ConfigManagementPage closeConfigManagement={handlers.handleConfigManagement} Done={() => AddActivity(8)} />}
      {showMonitoring && <MonitoringPage closeMonitoring={handlers.handleMonitoring} Done={() => AddActivity(9)} />}
      {showAdvancedCloud && <AdvancedCloudPage closeAdvancedCloud={handlers.handleAdvancedCloud} Done={() => AddActivity(10)} />}
      {showSRE && <SREPage closeSRE={handlers.handleSRE} Done={() => AddActivity(11)} />}
      {showFinOps && <FinOpsPage closeFinOps={handlers.handleFinOps} Done={() => AddActivity(12)} />}
      {showCertifications && <CertificationsPage closeCertifications={handlers.handleCertifications} Done={() => AddActivity(13)} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>CLOUD COMPUTING & DEVOPS</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {CloudRoadmap.map((item) => (
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