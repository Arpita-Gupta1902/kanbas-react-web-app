import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./dashboardReducer";

export interface AssignmentState {
  assignmentReducer: {
    assignments: any[];
    assignment: any;
  };
}

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  description: string;
  manuallyAdded: boolean;
}

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    courses: coursesReducer,
  },
});

export default store;
