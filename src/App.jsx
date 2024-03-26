import React from "react";
import "./App.scss";
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
import Studentnavbar from "./components/navbar/Student/Studentnavbar";
import Studentslist from "./pages/account/mentor/profile/Components/Student_list/Studentslist";
import Navbar from "./pages/account/mentor/profile/Components/Student_list/Components/Navbar/Navbar";
import Profile from "./pages/account/mentor/profile/Profile";
import Hero from "./pages/Course/Component/Hero/Hero";
import COURSE from "./pages/Course/COURSE"
import Signup from "./pages/account/mentor/profile/Components/Student_list/Components/Signup/Signup";
import Admin from "./pages/account/mentor/dashboard/Admin/Admin";
import Steper from "./pages/account/mentor/dashboard/Admin/Steper";
import Side from "./pages/account/mentor/dashboard/Admin/Adminsidebar/Side";
import Admnnav from "./pages/account/mentor/dashboard/Admin/Forms/Adminnav/Admnnav";
import SignUp from "./pages/authentication/signup/SignUp";
import Login from "./pages/authentication/login/Login";
// import Personal from "./pages/account/mentor/dashboard/Admin/Forms/Personaldetails/Personal";
// import VerticalLinearStepper from "./pages/account/mentor/dashboard/Admin/VerticalLinearStepper";
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
            
            <Route path="/studentnavbar" element={<Studentnavbar />} />
            <Route path="/studentslist" element={<Studentslist />} />
            <Route path="/studentsNav" element={<Navbar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hero" element={<Hero/>} />
            <Route path="/curse" element={<COURSE/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/steper" element={<Steper/>} />
            {/* <Route path="/per" element={<Personal/>} /> */}
            <Route path="/sdbar" element={<Side/>} />
            <Route path="/admnnav" element={<Admnnav/>} />
            <Route path="/sinup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />


















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
