import * as db from "../Database";
import { useSelector } from "react-redux";

const useIsFaculty = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { Users } = db;
  const user = Users.find((user) => user._id === currentUser?._id);
  return user?.role === "FACULTY";
};

export default useIsFaculty;
