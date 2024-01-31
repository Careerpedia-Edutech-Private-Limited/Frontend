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
import { MentorDashboard, MentorProfile } from "./pagesImport/mentorPagesImports";
import SignIn from "./pages/authentication/Signin/Components/SignIn";
import SignIn1 from "./pages/authentication/Signin/Components/SignIn1";
import LoginForm from "./pages/authentication/Signin/Components/LoginForm";

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
            <Route path="/home" element={<SignIn />} />
            <Route path="/home1" element={<SignIn1 />} />
            <Route path="/home2" element={<LoginForm />} />
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
