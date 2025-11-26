import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";

// Placeholder imports for each roadmap ge
// You would need to create these components following the same pattern.
import BasicsPage from "../CyberSecurity/Basics";
import NetworkingPage from "../CyberSecurity/Networking";
import OSBasicsPage from "../CyberSecurity/OSBasics";
import CyberLabPage from "../CyberSecurity/CyberLab";
import RedTeamPage from "../CyberSecurity/RedTeam";
import BlueTeamPage from "../CyberSecurity/BlueTeam";
import TrackChoicePage from "../CyberSecurity/TrackChoice";
import ProjectsPage from "../CyberSecurity/Projects";
import CertificationsPage from "../CyberSecurity/Certifications";
import RoutinePage from "../CyberSecurity/Routine";
import Fullresource from "../CyberSecurity/Fullresource";
import Development from "../../../hooks/developments.hooks";

import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";

export default function Cybersecurity() {
  const [activeId, setActiveId] = useState(null);
  const { createActivity } = useContext(ActivityContext);

  // Modal states for each
  const [showBasics, setShowBasics] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showOSBasics, setShowOSBasics] = useState(false);
  const [showCyberLab, setShowCyberLab] = useState(false);
  const [showRedTeam, setShowRedTeam] = useState(false);
  const [showBlueTeam, setShowBlueTeam] = useState(false);
  const [showTrackChoice, setShowTrackChoice] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showRoutine, setShowRoutine] = useState(false);
  const [showFullResource, setFullResource] = useState(false);

  //  Handlers for each step
  const handlers = {
    handleBasics: () => setShowBasics(!showBasics),
    handleNetworking: () => setShowNetworking(!showNetworking),
    handleOSBasics: () => setShowOSBasics(!showOSBasics),
    handleCyberLab: () => setShowCyberLab(!showCyberLab),
    handleRedTeam: () => setShowRedTeam(!showRedTeam),
    handleBlueTeam: () => setShowBlueTeam(!showBlueTeam),
    handleTrackChoice: () => setShowTrackChoice(!showTrackChoice),
    handleProjects: () => setShowProjects(!showProjects),
    handleCertifications: () => setShowCertifications(!showCertifications),
    handleRoutine: () => setShowRoutine(!showRoutine),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  const { data: roadmap, loading, error } = Development();

  const CyberSecurityRoadmap = roadmap?.[6]?.roadmapSteps ?? [];

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h2 className="text-white">Something went wrong!</h2>;
  }

  // AddActivity: mark a roadmap step completed (records activity via context)
  const AddActivity = async (id) => {
    try {
      if (!CyberSecurityRoadmap?.[id]) {
        console.warn("AddActivity: invalid step id", id);
        return;
      }
      const stepName = CyberSecurityRoadmap[id].name;
      const roadmapId = roadmap?.[6]?.route ?? roadmap?.[6]?.title ?? "cybersecurity";
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
      {/* Modals with Done callbacks */}
      {showBasics && <BasicsPage closeBasics={handlers.handleBasics} Done={() => AddActivity(0)} />}
      {showNetworking && <NetworkingPage closeNetworking={handlers.handleNetworking} Done={() => AddActivity(1)} />}
      {showOSBasics && <OSBasicsPage closeOSBasics={handlers.handleOSBasics} Done={() => AddActivity(2)} />}
      {showCyberLab && <CyberLabPage closeCyberLab={handlers.handleCyberLab} Done={() => AddActivity(3)} />}
      {showRedTeam && <RedTeamPage closeRedTeam={handlers.handleRedTeam} Done={() => AddActivity(4)} />}
      {showBlueTeam && <BlueTeamPage closeBlueTeam={handlers.handleBlueTeam} Done={() => AddActivity(5)} />}
      {showTrackChoice && <TrackChoicePage closeTrackChoice={handlers.handleTrackChoice} Done={() => AddActivity(6)} />}
      {showProjects && <ProjectsPage closeProjects={handlers.handleProjects} Done={() => AddActivity(7)} />}
      {showCertifications && <CertificationsPage closeCertifications={handlers.handleCertifications} Done={() => AddActivity(8)} />}
      {showRoutine && <RoutinePage closeRoutine={handlers.handleRoutine} Done={() => AddActivity(9)} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>CYBERSECURITY ROADMAP</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {CyberSecurityRoadmap.map((item) => (
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