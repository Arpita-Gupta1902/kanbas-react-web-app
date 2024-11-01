import { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { Assignments as assignments } from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignments } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const data = {
    description:
      "The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n- Your full name and section\n- Links to each of the lab assignments\n- A link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.",
  };
  const formatDate = (date: Date): string => {
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  const assignmentsRedux = useSelector((state: any) => state.assignmentReducer);
  const currAssignment = assignmentsRedux.assignments.find(
    (item: any) => item._id === aid
  );

  const [assignmentTitle, setAssignmentTitle] = useState(currAssignment.title);
  const [assignmentDescription, setAssignmentDescription] = useState(
    currAssignment.description
  );
  const [points, setPoints] = useState(currAssignment.points);
  const [dueDate, setDueDate] = useState(
    formatDate(new Date(currAssignment.due_date))
  );

  const [availableFrom, setAvailableFrom] = useState(
    formatDate(new Date(currAssignment.available_date))
  );
  const [availableUntil, setAvailableUntil] = useState(
    formatDate(new Date(currAssignment.available_until))
  );

  const handleSave = () => {
    const newData = {
      _id: aid,
      title: assignmentTitle,
      description: assignmentDescription,
      points: points,
      due_date: dueDate,
      available_date: availableFrom,
      available_until: availableUntil,
      course: currAssignment.course,
    };
    dispatch(updateAssignments(newData));
  };

  const CustomDateTimeInput: React.FC<{
    selectedDate: string;
    setSelectedDate: any;
  }> = ({ selectedDate, setSelectedDate }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedDate = new Date(e.target.value);
      setSelectedDate(formatDate(selectedDate));
    };

    const handleIconClick = () => {
      if (inputRef.current) {
        inputRef.current.showPicker();
      }
    };

    return (
      <div className="input-container">
        <div className="date-display">{selectedDate || ""}</div>
        <div className="calendar-icon" onClick={handleIconClick}>
          <FaCalendarAlt />
          <input
            ref={inputRef}
            type="datetime-local"
            className="date-time-picker"
            onChange={handleDateChange}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="wd-assignments-editor"
      className="container"
      style={{ fontFamily: "Times New Roman, Times, serif" }}
    >
      <div className="col mb-3">
        <div className="col mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            id="wd-name"
            className="form-control"
            onChange={(e) => setAssignmentTitle(e.target.value)}
            value={assignmentTitle}
          />
        </div>

        <div className="col d-flex mb-3">
          <input
            id="wd-description"
            className="form-control"
            onChange={(e) => setAssignmentDescription(e.target.value)}
            value={assignmentDescription}
            style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
          />
        </div>

        <div className="row d-flex mb-3">
          <div className="mb-3 col d-flex align-items-center">
            <label
              htmlFor="wd-points"
              className="col-2 form-label me-2 mb-0"
              style={{ textAlign: "right" }}
            >
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              className="form-control"
              onChange={(e) => setPoints(e.target.value)}
              value={points}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="wd-select-one-option"
              className="col-2 form-label me-2 mb-0"
              style={{ textAlign: "right" }}
            >
              Assignment Group
            </label>
            <select id="wd-select-one-option" className="form-select">
              <option value="ASSIGNMENT">ASSIGNMENTS</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="wd-display-grade-as"
              className="col-2 form-label me-2 mb-0"
              style={{ textAlign: "right" }}
            >
              Display Grade as
            </label>
            <select id="wd-display-grade-as" className="form-select">
              <option>Percentage</option>
            </select>
          </div>
        </div>

        <div className="col mb-3 d-flex">
          <label
            htmlFor="wd-submission-type"
            className="col-2 form-label me-2 mb-0"
            style={{ textAlign: "right" }}
          >
            Submission Type
          </label>
          <div className="card col mb-3">
            <div className="card-body">
              <div className="mb-3 ">
                <select id="wd-submission-type " className="form-select">
                  <option>Online</option>
                </select>
              </div>
              <label className="form-label">
                <strong>Online Entry Options</strong>
              </label>

              <div className="form-check ">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                  checked
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col mb-3 d-flex">
          <label
            htmlFor="wd-submission-type"
            className="col-2 form-label me-2 mb-0"
            style={{ textAlign: "right" }}
          >
            Assign
          </label>
          <div className="card col">
            <div className="card-body">
              <div className="form-group border p-3">
                <label htmlFor="assign-to">
                  <strong>Assign to</strong>
                </label>
                <div
                  className="form-control p-2 d-flex flex-wrap align-items-center"
                  id="assign-to"
                >
                  <span
                    className="badge bg-light border me-2 d-flex align-items-center"
                    style={{
                      fontSize: "15px",
                      color: "Black",
                      fontWeight: "normal",
                    }}
                  >
                    Everyone
                    <button
                      type="button"
                      className="btn-close ms-2"
                      aria-label="Remove"
                    ></button>
                  </span>
                  <input
                    type="text"
                    className="border-0 flex-grow-1"
                    style={{ outline: "none" }}
                  />
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label htmlFor="due-date">
                      <strong>Due</strong>
                    </label>
                    <CustomDateTimeInput
                      selectedDate={dueDate}
                      setSelectedDate={setDueDate}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="available-from">
                      <strong>Available from</strong>
                    </label>
                    <CustomDateTimeInput
                      selectedDate={availableFrom}
                      setSelectedDate={setAvailableFrom}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="available-until">
                      <strong>Until</strong>
                    </label>
                    <CustomDateTimeInput
                      selectedDate={availableUntil}
                      setSelectedDate={setAvailableUntil}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col text-end">
            <a
              className="wd-assignment-link text-decoration-none text-dark"
              href={`#/Kanbas/Courses/${cid}/Assignments`}
            >
              <button className="btn bg-light btn-secondary text-dark me-1">
                Cancel
              </button>
            </a>
            <a
              className="wd-assignment-link text-decoration-none text-dark"
              href={`#/Kanbas/Courses/${cid}/Assignments`}
            >
              <button className="btn btn-danger" onClick={handleSave}>
                Save
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// const CustomDateTimeInput: React.FC<{
//   selectedDate: string;
//   setSelectedDate: any;
// }> = ({ selectedDate, setSelectedDate }) => {
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedDate = new Date(e.target.value);
//     setSelectedDate(formatDate(selectedDate));
//   };
//   const formatDate = (date: Date): string => {
//     return date.toLocaleString("en-US", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//     });
//   };

//   const handleIconClick = () => {
//     if (inputRef.current) {
//       inputRef.current.showPicker();
//     }
//   };

//   return (
//     <div className="input-container">
//       <div className="date-display">{selectedDate || ""}</div>
//       <div className="calendar-icon" onClick={handleIconClick}>
//         <FaCalendarAlt />
//         <input
//           ref={inputRef}
//           type="datetime-local"
//           className="date-time-picker"
//           onChange={handleDateChange}
//         />
//       </div>
//     </div>
//   );
// };
