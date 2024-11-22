import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useIsFaculty from "./Account/useIsFaculty";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import {
  enroll,
  unenroll,
  // deleteCourse,
  // updateCourse,
  // addCourse,
} from "./dashboardReducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userId = currentUser._id;
  const UserIsFaculty = useIsFaculty();
  const [enrollmentToggle, setEnrollmentToggle] = useState<boolean>(true);
  const [selectedCourse, setSelectedCourse] = useState({
    name: "New course",
    description: "New description",
    _id: "",
  });
  // const handleAddCourse = () => {
  //   const course = {
  //     _id: new Date().getTime().toString(),
  //     name: selectedCourse.name,
  //     number: "New Number",
  //     startDate: "2023-09-10",
  //     endDate: "2025-12-15",
  //     description: selectedCourse.description,
  //     manuallyAdded: true,
  //   };
  //   dispatch(enroll({ courseId: course._id, userId }));
  //   dispatch(addCourse(course));
  // };

  //const courses = useSelector((state: any) => state.courses.courses);
  //const Enrollments = useSelector((state: any) => state.courses.enrollments);

  const [Enrollments, setEnrollments] = useState<any[]>([]);
  const fetchEnrollments = async () => {
    try {
      const enrollments = await userClient.allUserEnrollments();
      setEnrollments(enrollments);
    } catch (error) {
      console.error(error);
    }
  };

  const [courses, setCourses] = useState<any[]>([]);

  const course = {
    _id: new Date().getTime().toString(),
    name: selectedCourse.name,
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2025-12-15",
    description: selectedCourse.description,
    manuallyAdded: true,
  };

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setTimeout(() => {
      console.log("arp", courses);
    }, 1000);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      //console.log("arpita1", courses);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async () => {
    // await courseClient.updateCourse(course);
    // setCourses(courses.map((c) => {
    //     if (c._id === course._id) { return course; }
    //     else { return c; }
    // })
    await courseClient.updateCourse(selectedCourse);
    setCourses(
      courses.map((c) => {
        if (c._id === selectedCourse._id) {
          return selectedCourse;
        } else {
          return c;
        }
      })
    );
  };

  const [allCourses, setAllCourses] = useState<any[]>([]);
  const fetchAllCourses = async () => {
    try {
      const allcourses = await courseClient.fetchAllCourses();
      setAllCourses(allcourses);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
    fetchEnrollments();
  });

  const [enrollCourse, setEnrollCourse] = useState<any[]>([]);
  const enrollUserInCourse = async (courseId: string, userId: string) => {
    try {
      const enroll = await userClient.enrollUserInCourse(courseId, userId);
      setEnrollCourse(enroll);
    } catch (error) {
      console.error(error);
    }
  };

  const [unEnrollCourse, setUnEnrollCourse] = useState<any[]>([]);
  const unEnrollUserInCourse = async (courseId: string, userId: string) => {
    try {
      const unEnroll = await userClient.unEnrollUserInCourse(courseId, userId);
      setUnEnrollCourse(unEnroll);
    } catch (error) {
      console.error(error);
    }
  };

  // const displayCourses = enrollmentToggle
  //   ? courses.filter((course: any) =>
  //       Enrollments.some(
  //         (Enrollment: any) =>
  //           Enrollment.user === currentUser._id &&
  //           Enrollment.course === course._id
  //       )
  //     )
  //   : courses;

  const displayCourses = enrollmentToggle
    ? courses
    : allCourses;

  return (
    <div id="wd-dashboard" style={{ paddingLeft: "30px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {UserIsFaculty && (
        <h5>
          New Course
          {UserIsFaculty && (
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              // onClick={handleAddCourse}
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
          )}
          {UserIsFaculty && (
            <button
              className="btn btn-warning float-end me-2"
              //onClick={() => dispatch(updateCourse(selectedCourse))}
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          )}
        </h5>
      )}
      <br />
      {UserIsFaculty && (
        <input
          value={selectedCourse.name}
          className="form-control mb-2"
          onChange={(e) =>
            setSelectedCourse((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      )}
      {UserIsFaculty && (
        <textarea
          value={selectedCourse.description}
          className="form-control"
          onChange={(e) =>
            setSelectedCourse((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
      )}
      <div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 id="wd-dashboard-published">
            Published Courses ({displayCourses.length})
          </h2>
          {!UserIsFaculty && (
            <button
              style={{
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => {
                setEnrollmentToggle(!enrollmentToggle);
              }}
            >
              Enrollments
            </button>
          )}
        </div>
        <hr />
      </div>
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayCourses.map((course: any) => {
            const isEnrolled = Enrollments.some(
              (Enrollment: any) =>
                Enrollment.user === currentUser._id &&
                Enrollment.course === course._id
            );
            return (
              <div
                className="wd-dashboard-course col"
                style={{
                  width: "260px",
                  paddingTop: "35px",
                  marginBottom: "35px",
                }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    onClick={(event) => {
                      if (!isEnrolled) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <img
                      src={`/images/${
                        course.manuallyAdded ? "docker" : course._id
                      }.png`}
                      width="100%"
                      height={200}
                    />
                    <div className="card-body">
                      <div>
                        <h5
                          className="wd-dashboard-course-title card-title"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>
                      </div>

                      <button className="btn btn-primary me-4"> Go </button>
                      {UserIsFaculty && (
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setSelectedCourse(course);
                          }}
                          className="btn btn-warning"
                        >
                          Edit
                        </button>
                      )}
                      {UserIsFaculty && (
                        <button
                          // onClick={(event) => {
                          //   event.preventDefault();
                          //   dispatch(deleteCourse(course._id));
                          // }}
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </Link>
                  {!UserIsFaculty && (
                    <button
                      style={{
                        padding: "10px 15px",
                        backgroundColor: isEnrolled ? "red" : "green",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginTop: 5,
                      }}
                      onClick={() => {
                        isEnrolled
                          // ? dispatch(unenroll({ courseId: course._id, userId }))
                          // : dispatch(enroll({ courseId: course._id, userId }));
                          ? unEnrollUserInCourse(course._id, userId)
                          : enrollUserInCourse(course._id, userId);
                      }}
                    >
                      {isEnrolled ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
