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
import { StudentBasicCourse, StudentDashboard ,StudentCsep,StudentCsap,Studentjobs,StudentRefer,StudentSupport,StudentInterviews} from "./pagesImport/StudentPagesImport";


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

const StudentRoutes = [
  {
    path: "dashboard",
    element: <StudentDashboard />
  },

  {
    path: "basic-course",
    element: <StudentBasicCourse />
  },
  {
    path: "csep",
    element: <StudentCsep />
  },
  {
    path: "csap",
    element: <StudentCsap />
  },
  {
    path: "Jobs",
    element: <Studentjobs />
  },
  {
    path: "Refer",
    element: <StudentRefer />
  },
  {
    path: "Support",
    element: <StudentSupport />
  },
  {
    path: "Interviews",
    element: <StudentInterviews />
  },
]

function App() {
  return (
    <>
      <ScrollToTop>
        {window.innerWidth > 1000 ? (
          <Routes>
            <Route path="/" element={<h1>Careerpedia</h1>} />


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



            <Route path="/student">
              {StudentRoutes.map((route, index) => (
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
