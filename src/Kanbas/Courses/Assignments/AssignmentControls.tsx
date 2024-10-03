import { FaSearch, FaPlus } from 'react-icons/fa';

export default function AssignmentControls() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">

        <div className="search-wrapper">
        <input 
            type="text"
            placeholder="Search..."
            aria-label="Search Assignments"
            className="search-input"
        />
        <FaSearch className="search-icon" />
        </div>


      <div>
      <button id="wd-add-module-btn" className="btn btn-lg me-1 bg-light" style={{ 
            fontWeight: 400,
            borderRadius: 0,
            border: "1px solid #d3d3d3"
        }}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1" style={{ borderRadius: 0 }}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      </div>
    </div>
  );
}
