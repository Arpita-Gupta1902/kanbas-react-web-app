import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ border: '1px solid #ccc', fontWeight: '500' }}>40% of Total</span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}