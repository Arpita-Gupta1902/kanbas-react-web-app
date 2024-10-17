import { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { Assignments as assignments} from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((item) => item._id === aid);
  const data = {
    description: {
      text1: "The assignment is",
      text2: "available online",
      text3: "Submit a link to the landing page of your Web application running on Netlify.",
      text4: "The landing page should include the following:",
      points: [
          "Your full name and section",
          "Links to each of the lab assignments",
          "A link to the Kanbas application",
          "Links to all relevant source code repositories"
        ],
      text5: "The Kanbas application should include a link to navigate back to the landing page"
    }
  };
  return (
    <div id="wd-assignments-editor" className="container" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <div className="col mb-3">
        <div className="col mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" value={assignment ? assignment.title : ""} />
        </div>
      
        <div className="col d-flex mb-3">
          <div
            id="wd-description"
            className="form-control"
            contentEditable="true"
            style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}>
            {data.description.text1} <span className = "text-danger">{data.description.text2}</span>
            <br/>
            <br/>
            {data.description.text3} 
            <br/>
            <br/>
            {data.description.text4}
            <br/>
            <br/>
            <ul>
              {data.description.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {data.description.text5}
          </div>
        </div>
      

      <div className="row d-flex mb-3">
        <div className="mb-3 col d-flex align-items-center">
          <label htmlFor="wd-points" className="col-2 form-label me-2 mb-0" style={{textAlign:"right"}}>Points</label>
          <input id="wd-points" type="number" className="form-control" value={assignment ? assignment.points : ""} />
        </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-select-one-option" className="col-2 form-label me-2 mb-0" style={{textAlign:"right"}}>Assignment Group</label>
            <select id="wd-select-one-option" className="form-select">
              <option value="ASSIGNMENT">ASSIGNMENTS</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-display-grade-as" className="col-2 form-label me-2 mb-0" style={{textAlign:"right"}}>Display Grade as</label>
            <select id="wd-display-grade-as" className="form-select">
              <option>Percentage</option>
            </select>
          </div>
        </div>

          <div className="col mb-3 d-flex">
          <label htmlFor="wd-submission-type" className="col-2 form-label me-2 mb-0"  style={{textAlign:"right"}}>Submission Type</label>
          <div className="card col mb-3">
            <div className="card-body">
              <div className="mb-3 ">
                <select id="wd-submission-type " className="form-select">
                  <option>Online</option>
                </select>
              </div>
              <label className="form-label"><strong>Online Entry Options</strong></label>
              
              <div className="form-check ">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <br />
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" checked />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <br />
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <br />
              <div className="form-check">
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <br />
              <div className="form-check">
                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
          </div>

        <div className="col mb-3 d-flex">
          <label htmlFor="wd-submission-type" className="col-2 form-label me-2 mb-0" style={{textAlign:"right"}}>Assign</label>
          <div className="card col">
            <div className="card-body">
            <div className="form-group border p-3">
              <label htmlFor="assign-to"><strong>Assign to</strong></label>
              <div className="form-control p-2 d-flex flex-wrap align-items-center" id="assign-to">
                <span className="badge bg-light border me-2 d-flex align-items-center" style={{fontSize: "15px", color:"Black", fontWeight: "normal"}}>
                  Everyone
                  <button type="button" className="btn-close ms-2" aria-label="Remove"></button>
                </span>
                <input
                  type="text"
                  className="border-0 flex-grow-1"
                  style={{ outline: 'none' }}
                />
            </div>
              
              <div className="row mt-3">
                <div className="col-md-12">
                  <label htmlFor="due-date"><strong>Due</strong></label>
                  <CustomDateTimeInput defaultDate={assignment ? assignment.due_date : ""} />
                </div>
              </div>
              
              <div className="row mt-3">
                <div className="col-md-6">
                  <label htmlFor="available-from"><strong>Available from</strong></label>
                  <CustomDateTimeInput defaultDate={assignment ? assignment.available_date : ""} />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="available-until"><strong>Until</strong></label>
                  <CustomDateTimeInput />
                </div>

              </div>
            </div>
            </div>
            </div>
      </div>

      <hr />
      <div className="row">
        <div className="col text-end">
          <a className="wd-assignment-link text-decoration-none text-dark" href={`#/Kanbas/Courses/${cid}/Assignments`}><button className="btn bg-light btn-secondary text-dark me-1">Cancel</button></a>
          <a className="wd-assignment-link text-decoration-none text-dark" href={`#/Kanbas/Courses/${cid}/Assignments`}><button className="btn btn-danger">Save</button></a>
        </div>
      </div>
    </div>
    </div>
  );
}

const CustomDateTimeInput: React.FC<{ defaultDate?: string }> = ({ defaultDate }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setDateTime(formatDate(selectedDate));
  };
  const formatDate = (date: Date): string => {
    return date.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const [dateTime, setDateTime] = useState<string>(
    defaultDate ? formatDate(new Date(defaultDate)) : ''
  );

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className="input-container">
      <div className="date-display">{dateTime || defaultDate}</div>
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