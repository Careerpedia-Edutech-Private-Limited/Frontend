import React from "react";
import "./App.scss";
import "./utils/App.css"
import { Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Utils
import ScrollToTop from "./utils/ScrollToTop";

// Fallback Screen
import Fallback from "./components/fallback/Fallback";
import MobileScreen from "./components/mobileScreen/MobileScreen";
import PageNotFound from "./components/pageNotFound/PageNotFound";

// Pages
import { MentorDashboard,MentorProfile } from "./pagesImport/mentorPagesImports";
import Profile from "./pages/account/college/profile/Profile";



function App() {
  return (
    <>
      <ScrollToTop>
        {window.innerWidth > 1000 ? (
          <Routes>
            <Route path="/" element={<h1>Careerpedia</h1>} />
             <Route  path="/College/profile" element={<Profile/>}></Route>

            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        ) : (
          <MobileScreen />
        )}
      </ScrollToTop>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
