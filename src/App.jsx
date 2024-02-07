import React from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Navbar from '../src/components/navbar/Navbar'
// import Sidebar from "../src/components/sidebar/Sidebar";
import Mentor from "./pages/account/admin/Dashboard/Mentor/Mentor";


// Utils
import ScrollToTop from "./utils/ScrollToTop";

// Fallback Screen
import Fallback from "./components/fallback/Fallback";
import MobileScreen from "./components/mobileScreen/MobileScreen";
import PageNotFound from "./components/pageNotFound/PageNotFound";

// Pages
import { MentorDashboard,MentorProfile } from "./pagesImport/mentorPagesImports";

// Route Data
const mentorRoutes = [
  {
    path: "dashboard",
    element: <MentorDashboard />,
  },
  {
    path: "profile",
    element: <MentorProfile />,
  },
];

function App() {
  return (
    <>
      <ScrollToTop>
        {window.innerWidth > 1000 ? (
          <Routes>
            <Route path="/" element={<h1>Careerpedia</h1>} />
            {/* <Route path="/navbar" element={<Navbar/>} /> */}
            {/* <Route path="/sidebar" element={<Sidebar/>} /> */}
            <Route path="/mentor" element={<Mentor/>} />
            
            <Route path="/mentor">
              {mentorRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <React.Suspense fallback={<Fallback />}>
                      {route.element}
                    </React.Suspense>
                  }
                />
              ))}
            </Route>
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
