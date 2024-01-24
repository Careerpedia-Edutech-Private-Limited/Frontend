import React from 'react'

export const StudentDashboard = React.lazy(() =>
  import("../pages/account/Student/Dashboard/Dashboard")
  
);

export const StudentBasicCourse = React.lazy(() =>
  import("../pages/account/Student/BasicCourse/BasicCourse")
  
);
export const StudentCsep = React.lazy(() =>
  import("../pages/account/Student/Csep/Csep")
  
);
export const StudentCsap = React.lazy(() =>
  import("../pages/account/Student/Csap/Csap")
  
);

export const Studentjobs = React.lazy(() =>
  import("../pages/account/Student/Jobs/Jobs")
  
);

export const StudentRefer = React.lazy(() =>
  import("../pages/account/Student/Refer/Refer")
  
);

export const StudentSupport = React.lazy(() =>
  import("../pages/account/Student/Support/Support")
  
);

export const StudentInterviews = React.lazy(() =>
  import("../pages/account/Student/Interviews/Interviews")
  
);



