import React from 'react'

export const MentorDashboard = React.lazy(() =>
  import("../pages/account/mentor/dashboard/Dashboard")
);

export const MentorProfile = React.lazy(() =>
  import("../pages/account/mentor/profile/Profile")
);

export const TodayInterviews = React.lazy(() =>
  import("../pages/account/Admin/Interview/Components/TodayInterviews/TodayInterviews")
);

export const AllInterviews = React.lazy(() =>
  import("../pages/account/Admin/Interview/Components/AllInterviews/AllInterviews")
);



// export const Navbar = React.lazy(() =>
//   import("../components/navbar/Navbar")
// );

// export const Sidebar = React.lazy(() =>
//   import("../components/sidebar/Sidebar")
// );

