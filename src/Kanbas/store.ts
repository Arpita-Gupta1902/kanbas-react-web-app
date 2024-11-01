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

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    courses: coursesReducer,
  },
});

export default store;
