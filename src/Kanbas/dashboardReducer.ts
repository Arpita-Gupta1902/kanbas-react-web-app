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
  },
});

export const { enroll, unenroll } = courseSlice.actions;
export default courseSlice.reducer;
