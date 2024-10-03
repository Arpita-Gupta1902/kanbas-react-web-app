import { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" value="A1" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <div
            id="wd-description"
            className="form-control"
            contentEditable="true"
            style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
          >
            The assignment is <span className = "text-danger">available online</span>.
            <br/>
            <br/>
            Submit a link to the landing page of your Web application running on Netlify. 
            <br/>
            <br/>
            The landing page should include the following:
            <br/>
            <br/>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>A link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            The Kanbas application should include a link to navigate back to the landing page
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-lg" style={{ marginLeft: '200px' }}>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="wd-points" className="col-2 form-label me-2 mb-0" style={{paddingLeft: "85px"}}>Points</label>
          <input id="wd-points" type="number" className="form-control" value={100} />
        </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-select-one-option" className="col-2 form-label me-2 mb-0">Assignment Group</label>
            <select id="wd-select-one-option" className="form-select">
              <option value="ASSIGNMENT">ASSIGNMENTS</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-display-grade-as" className="col-2 form-label me-2 mb-0" style={{paddingLeft: "8px"}}>Display Grade as</label>
            <select id="wd-display-grade-as" className="form-select">
              <option>Percentage</option>
            </select>
          </div>

          <div className="mb-3 d-flex">
          <label htmlFor="wd-submission-type" className="col-2 form-label me-2 mb-0"  style={{paddingLeft: "8px"}}>Submission Type</label>
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

          <div className="mb-3 d-flex">
          <label htmlFor="wd-submission-type" className="col-2 form-label me-2 mb-0" style={{paddingLeft: "77px"}}>Assign</label>
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
                  <CustomDateTimeInput defaultDate="2024-05-13T23:59" />
                </div>
              </div>
              
              <div className="row mt-3">
                <div className="col-md-6">
                  <label htmlFor="available-from"><strong>Available from</strong></label>
                  <CustomDateTimeInput defaultDate="2024-05-06T12:00" />
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
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col text-end">
          <button className="btn bg-light btn-secondary me-1">Cancel</button>
          <button className="btn btn-danger">Save</button>
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