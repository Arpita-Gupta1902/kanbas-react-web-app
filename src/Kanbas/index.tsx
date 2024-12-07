import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as courseClient from "./Courses/client"
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import "./styles.css";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    manuallyAdded: true,
  });

const [enrolling, setEnrolling] = useState<boolean>(false);
 const findCoursesForUser = async () => {
   try {
     const courses = await userClient.findCoursesForUser(currentUser._id);
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };

 const updateEnrollment = async (courseId: string, enrolled: boolean) => {
  if (enrolled) {
    await userClient.enrollIntoCourse(currentUser._id, courseId);
  } else {
    await userClient.unenrollFromCourse(currentUser._id, courseId);
  }
  setCourses(
    courses.map((course) => {
      if (course._id === courseId) {
        return { ...course, enrolled: enrolled };
      } else {
        return course;
      }
    })
  );
};

const fetchCourses = async () => {
  try {
    const allCourses = await courseClient.fetchAllCourses();
    setCourses(allCourses);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchCourses();
}, [])


  return (
    <Session>
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
  );
}