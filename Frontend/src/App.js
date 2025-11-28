import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLeft from './components/layout/mainleft';
import MainRight from './components/layout/mainright';
import Development from './components/pages/Development';
// import Language from './components/pages/Language';
import Saved from './components/pages/Saved';
import Contact from './components/pages/Contact';
import Registation from './components/forms/Registation';
import LandingPage from './components/ui/LandingPage';
import Profile from './components/pages/Profile';
import AdditionalDetails from './components/forms/setAdditionalDetails';
import Login from './components/forms/Login';
import PersonalDetails from './components/forms/addpersonaldetails';
import UpdateDetails from './components/pages/updateDetails';
import Notification from './components/pages/Notification';
import Settings from './components/pages/settings';

import AiML from './components/DevelopmentRoutes/ALMLdevelopment/AIML_development';
import Gamedev from './components/DevelopmentRoutes/Gamedevelopment/Roadmap';
import AppDev from './components/DevelopmentRoutes/APPdevelopment/appdevelopmet';
import Webdev from './components/DevelopmentRoutes/webdevelopmentRoutes/webdevelopment';
import FrontendDev from './components/DevelopmentRoutes/FrontendDevelopment/FrontendRoadmap';
import Activity from './components/pages/Activity';
import BackendRoadmap from './components/DevelopmentRoutes/BackendDev/BackendRoadmap';
import BlockchainDev from './components/DevelopmentRoutes/Blockchain/Roadmap';
import CloudComputing from './components/DevelopmentRoutes/CloudDevOps/Roadmap';
import Cybersecurity from './components/DevelopmentRoutes/CyberSecurity/roadmap';
import DataScience from './components/DevelopmentRoutes/DataScience/roadmap';
import BigData from './components/DevelopmentRoutes/BigData/roadmap';
import IoT from './components/DevelopmentRoutes/IoT/roadmap';
import Search from './components/pages/search';
import { ROUTES } from './constants/routes';
import { Toaster } from 'sonner';
import ProtectedRoute from './utils/ProtectedRoute';
import PublicRoute from './utils/ PublicRoute';

function App() {

  return (
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{
          style: { borderRadius: "8px", backgroundColor: "black", color: "white" },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route
          path={ROUTES.LANDINGPAGE}
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.REGISTER}
          element={
            <PublicRoute>
              <Registation />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Home / Main layout */}
        <Route
          path={ROUTES.HOME}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <MainRight />
              </main>
            </ProtectedRoute>
          }
        />

        {/* Protected Routes (sidebar always visible) */}
        <Route
          path={ROUTES.DEVELOPMENT}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Development />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SEARCH}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Search />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SAVED}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Saved />
              </main>
            </ProtectedRoute>
          }
        />


        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Profile />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ABOUT_US}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Contact />
              </main>
            </ProtectedRoute>
          }
        />

<Route
          path={ROUTES.SETTINGS}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Settings />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ACITVITY}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Activity />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.NOTFICATION}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Notification />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.UPDATEDETAILS}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <UpdateDetails />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ADDITIONALDETAILS}
          element={
            <ProtectedRoute>
              <AdditionalDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ADDPERSONALDETAILS}
          element={
            <ProtectedRoute>
              <PersonalDetails />
            </ProtectedRoute>
          }
        />

        {/* Dev routes */}
        <Route
          path={ROUTES.APP_DEV}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <AppDev />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.AI_ML}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <AiML />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.GAME_DEV}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Gamedev />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.WEB_DEV}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Webdev />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.FRONTEND_DEV}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <FrontendDev />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.BACKEND_DEV}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <BackendRoadmap />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.BLOCKCHAIN_DEV}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <BlockchainDev />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.CLOUD_COMPUTING}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <CloudComputing />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.CYBERSECURITY}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <Cybersecurity />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.DATASCIENCE}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <DataScience />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.BIGDATA}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <BigData />
              </main>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.IOT}
          element={
            <ProtectedRoute>
              <main className="flex p-0 m-0 bg-primary-bg font-[Roboto]">
                <MainLeft />
                <IoT />
              </main>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
