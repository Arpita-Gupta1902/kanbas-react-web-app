import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModulesControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Assignments as assignments} from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
    return (
      <div id="wd-assignments">
        <AssignmentControls/><br/><br/>
        <ul id="wd-assignments" className="list-group rounded-0 module-container">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light">
                  <BsGripVertical className="me-2 fs-3" />
                  <GoTriangleDown className="me-2 fs-4"/>
                    ASSIGNMENTS
                  <AssignmentControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {assignments.map((item) => {
                if (item.course === cid) { 
                return( 
                <li className="wd-lesson d-flex border-bottom border-gray">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="ms-2 fs-4" />
                    <FaRegEdit className="ms-3 text-success fs-4"/>
                  </div>
                  <div className="fs-6 assignment-padding">
                    <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                    <strong>{item.title}</strong><br/>
                    </a>
                    <div className="ms-3 text-muted">
                    <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> {item ? formatDate(item.available_date) : ""} |<br/><span className="text-dark">Due</span> {item ? formatDate(item.due_date) : ""} | {item ? item.points : ""} <span>pts</span>
                    </div>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                  <span className="me-4"> 
                    <GreenCheckmark />
                  </span>
                    <IoEllipsisVertical className="me-4"/>
                  </div>
                </li>
              )
              }
              }
              )
              }
            </ul>
          </li>
        </ul>
      </div>
  );}
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric' 
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
  
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    return `${formattedDate} at ${hours}:${minutes} ${ampm}`;
  };
  