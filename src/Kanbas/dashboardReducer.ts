import { createSlice } from "@reduxjs/toolkit";
import { Courses, Enrollments } from "./Database";

const initialState = {
  courses: Courses,
  enrollments: Enrollments,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    enroll: (state, action) => {
      const { courseId, userId } = action.payload;
      const isEnrolled = state.enrollments.some(
        (enrollment) =>
          enrollment.course === courseId && enrollment.user === userId
      );

      if (!isEnrolled) {
        state.enrollments.push({
          _id: `${state.enrollments.length + 1}`,
          user: userId,
          course: courseId,
        });
      }
    },
    unenroll: (state, action) => {
      const { courseId, userId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.course === courseId && enrollment.user === userId)
      );
    },
    deleteCourse: (state, action) => {
      const courseId = action.payload;
      state.courses = state.courses.filter((course) => course._id !== courseId);
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.course !== courseId
      );
    },
    updateCourse: (state, action) => {
      const updatedCourse = action.payload;
      state.courses = state.courses.map((course) =>
        course._id === updatedCourse._id ? updatedCourse : course
      );
    },
    addCourse: (state, action) => {
      const newCourse = { ...action.payload };
      state.courses.push(newCourse);
    },
  },
});

export const { enroll, unenroll, deleteCourse, updateCourse, addCourse } =
  courseSlice.actions;
export default courseSlice.reducer;
