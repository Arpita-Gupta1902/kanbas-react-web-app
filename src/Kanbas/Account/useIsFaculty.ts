import * as db from "../Database";
import { useSelector } from "react-redux";

const useIsFaculty = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { Users } = db;
  const user = Users.find((user) => user.username === currentUser?.username);
  return user?.role === "FACULTY";
};

export default useIsFaculty;
