import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";

// Placeholder imports for each roadmap step page
// You would need to create these components (e.g., ProgrammingPage, MathPage)
// following the same pattern as your other roadmap pages.
import ProgrammingPage from "../DataScience/Programming";
import MathPage from "../DataScience/Math";
import VizPage from "../DataScience/DataViz";
import SQLPage from "../DataScience/SQL";
import MLPage from "../DataScience/ML";
import ProjectsPage from "../DataScience/Projects";
import SpecializationPage from "../DataScience/Specialization";
import Fullresource from "../DataScience/Fullresource";
import Development from "../../../hooks/developments.hooks";

import ReviewPage from "../../forms/Review";

// added imports
import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";

export default function DataScience() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each step
  const [showProgramming, setShowProgramming] = useState(false);
  const [showMath, setShowMath] = useState(false);
  const [showViz, setShowViz] = useState(false);
  const [showSQL, setShowSQL] = useState(false);
  const [showML, setShowML] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const [showFullResource, setFullResource] = useState(false);

  // Handlers for each step
  const handlers = {
    handleProgramming: () => setShowProgramming(!showProgramming),
    handleMath: () => setShowMath(!showMath),
    handleViz: () => setShowViz(!showViz),
    handleSQL: () => setShowSQL(!showSQL),
    handleML: () => setShowML(!showML),
    handleProjects: () => setShowProjects(!showProjects),
    handleSpecialization: () => setShowSpecialization(!showSpecialization),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  const { data: roadmap, loading, error } = Development();

  const DSRoadmap = roadmap?.[9]?.roadmapSteps ?? [];

  // Activity context
  const { createActivity } = useContext(ActivityContext);

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h2 className='text-white'>Something went wrong!</h2>;
  }

  // AddActivity: mark a roadmap step completed
  const AddActivity = async (id) => {
    try {
      if (!DSRoadmap?.[id]) {
        console.warn("AddActivity: invalid step id", id);
        return;
      }
      const stepName = DSRoadmap[id].name;
      const roadmapId = roadmap?.[9]?.route ?? roadmap?.[9]?.title ?? "data-science";
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
      {/* Modals (added Done callbacks to record activity) */}
      {showProgramming && <ProgrammingPage closeProgramming={handlers.handleProgramming} Done={() => AddActivity(0)} />}
      {showMath && <MathPage closeMath={handlers.handleMath} Done={() => AddActivity(1)} />}
      {showViz && <VizPage closeViz={handlers.handleViz} Done={() => AddActivity(2)} />}
      {showSQL && <SQLPage closeSQL={handlers.handleSQL} Done={() => AddActivity(3)} />}
      {showML && <MLPage closeML={handlers.handleML} Done={() => AddActivity(4)} />}
      {showProjects && <ProjectsPage closeProjects={handlers.handleProjects} Done={() => AddActivity(5)} />}
      {showSpecialization && <SpecializationPage closeSpecialization={handlers.handleSpecialization} Done={() => AddActivity(6)} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>DATA SCIENCE ROADMAP</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {DSRoadmap.map((item, idx) => (
            <div
              key={item.id ?? idx}
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
      <ReviewPage />
      <MobileNav />
    </section>
  );
}