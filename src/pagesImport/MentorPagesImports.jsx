import React from 'react'

export const MentorDashboard = React.lazy(() =>
  import("../pages/account/mentor/dashboard/Dashboard")
);

export const MentorProfile = React.lazy(() =>
  import("../pages/account/mentor/profile/Profile")
);


export const MentorCourseView = React.lazy(() =>
  import("../pages/account/mentor/courseView/CourseView")
);