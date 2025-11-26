import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";

// Placeholder imports for each roadmap step page (create these similar to your AI pages)
import PrereqsPage from "../Blockchain/Prereqs";
import ToolingPage from "../Blockchain/Tooling";
import SolidityPage from "../Blockchain/Solidity";
import TestingPage from "../Blockchain/Testing";
import FrontendPage from "../Blockchain/Frontend";
import TokensPage from "../Blockchain/Tokens";
import UpgradesPage from "../Blockchain/Upgrades";
import DataPage from "../Blockchain/Data";
import OraclesPage from "../Blockchain/Oracles";
import DefiPage from "../Blockchain/Defi";
import L2Page from "../Blockchain/L2";
import SecurityPage from "../Blockchain/Security";
import AdvancedPage from "../Blockchain/Advanced";
import DevOpsPage from "../Blockchain/DevOps";
import PortfolioPage from "../Blockchain/Portfolio";
import CareerPage from "../Blockchain/Career";
import Fullresource from "../Blockchain/Fullresource";
import Development from "../../../hooks/developments.hooks";
import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";

export default function Blockchain() {
  const [activeId, setActiveId] = useState(null);
  const { createActivity } = useContext(ActivityContext);

  // Modal states
  const [showPrereqs, setPrereqs] = useState(false);
  const [showTooling, setTooling] = useState(false);
  const [showSolidity, setSolidity] = useState(false);
  const [showTesting, setTesting] = useState(false);
  const [showFrontend, setFrontend] = useState(false);
  const [showTokens, setTokens] = useState(false);
  const [showUpgrades, setUpgrades] = useState(false);
  const [showData, setData] = useState(false);
  const [showOracles, setOracles] = useState(false);
  const [showDefi, setDefi] = useState(false);
  const [showL2, setL2] = useState(false);
  const [showSecurity, setSecurity] = useState(false);
  const [showAdvanced, setAdvanced] = useState(false);
  const [showDevOps, setDevOps] = useState(false);
  const [showPortfolio, setPortfolio] = useState(false);
  const [showCareer, setCareer] = useState(false);
  const [showFullResource, setFullResource] = useState(false);

  // Handlers
  const handlers = {
    handlePrereqs: () => setPrereqs(!showPrereqs),
    handleTooling: () => setTooling(!showTooling),
    handleSolidity: () => setSolidity(!showSolidity),
    handleTesting: () => setTesting(!showTesting),
    handleFrontend: () => setFrontend(!showFrontend),
    handleTokens: () => setTokens(!showTokens),
    handleUpgrades: () => setUpgrades(!showUpgrades),
    handleData: () => setData(!showData),
    handleOracles: () => setOracles(!showOracles),
    handleDefi: () => setDefi(!showDefi),
    handleL2: () => setL2(!showL2),
    handleSecurity: () => setSecurity(!showSecurity),
    handleAdvanced: () => setAdvanced(!showAdvanced),
    handleDevOps: () => setDevOps(!showDevOps),
    handlePortfolio: () => setPortfolio(!showPortfolio),
    handleCareer: () => setCareer(!showCareer),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  const { data: roadmap, loading, error } = Development();

  const BlockchainRoadmap = roadmap?.[7]?.roadmapSteps ?? [];

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h2 className='text-white'>Something went wrong!</h2>;
  }

  // AddActivity: mark a roadmap step completed
  const AddActivity = async (id) => {
    if (!BlockchainRoadmap?.[id]) {
      console.warn("AddActivity: invalid step id", id);
      return;
    }
    try {
      const stepName = BlockchainRoadmap[id].name;
      const roadmapId = roadmap?.[7]?.route ?? roadmap?.[7]?.title ?? "blockchain";
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
      {showPrereqs && <PrereqsPage closePrereqs={handlers.handlePrereqs} Done={() => AddActivity(0)} />}
      {showTooling && <ToolingPage closeToolingSetup={handlers.handleTooling} Done={() => AddActivity(1)} />}
      {showSolidity && <SolidityPage closeSolidityFoundations={handlers.handleSolidity} Done={() => AddActivity(2)} />}
      {showTesting && <TestingPage closeTestingQuality={handlers.handleTesting} Done={() => AddActivity(3)} />}
      {showFrontend && <FrontendPage closeFrontendIntegration={handlers.handleFrontend} Done={() => AddActivity(4)} />}
      {showTokens && <TokensPage closeTokenStandards={handlers.handleTokens} Done={() => AddActivity(5)} />}
      {showUpgrades && <UpgradesPage closeUpgradesAccessControl={handlers.handleUpgrades} Done={() => AddActivity(6)} />}
      {showData && <DataPage closeDataIndexing={handlers.handleData} Done={() => AddActivity(7)} />}
      {showOracles && <OraclesPage closeOraclesAutomation={handlers.handleOracles} Done={() => AddActivity(8)} />}
      {showDefi && <DefiPage closeDeFiPrimitives={handlers.handleDefi} Done={() => AddActivity(9)} />}
      {showL2 && <L2Page closeL2CrossChain={handlers.handleL2} Done={() => AddActivity(10)} />}
      {showSecurity && <SecurityPage closeSecurity={handlers.handleSecurity} Done={() => AddActivity(11)} />}
      {showAdvanced && <AdvancedPage closeAdvancedPaths={handlers.handleAdvanced} Done={() => AddActivity(12)} />}
      {showDevOps && <DevOpsPage closeDevOps={handlers.handleDevOps} Done={() => AddActivity(13)} />}
      {showPortfolio && <PortfolioPage closePortfolio={handlers.handlePortfolio} Done={() => AddActivity(14)} />}
      {showCareer && <CareerPage closeCareerPrep={handlers.handleCareer} Done={() => AddActivity(15)} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>BLOCKCHAIN DEVELOPMENT</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {BlockchainRoadmap.map((item) => (
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
