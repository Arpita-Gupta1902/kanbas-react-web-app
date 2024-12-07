import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import useIsFaculty from "../../Account/useIsFaculty";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  // editModule,
  module,
  setItems
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  //editModule: (moduleId: any) => Promise<any>;
  module: any;
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const UserIsFaculty = useIsFaculty();
  return (
    <div className="float-end">
      {UserIsFaculty && (
        <FaPencil
          onClick={() => {
            // editModule(moduleId)}
            setItems((prev) => prev.map((item) => item._id === moduleId ? {...item, editing : true} : item))
          }
        }
          className="text-primary me-3"
        />
      )}
      {UserIsFaculty && (
        <FaTrash
          className="text-danger me-2 mb-1"
          onClick={() => deleteModule(moduleId)}
        />
      )}
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
