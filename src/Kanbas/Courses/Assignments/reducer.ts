import { createSlice } from "@reduxjs/toolkit";
import { Assignments } from "../../Database";

const initialState = {
  assignments: Assignments,
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignments: (state, action) => {
      state.assignments = [{ ...action.payload }, ...state.assignments];
    },
    deleteAssignments: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignments: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const {
  addAssignments,
  deleteAssignments,
  updateAssignments,
  setAssignments,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
