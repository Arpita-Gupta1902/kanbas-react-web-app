export default function Assignments() {
    return (
      <div id="wd-assignments" style={{ fontFamily: 'Times New Roman'}}>
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total
          <span style={{ marginLeft: '5px' }}>
            <button id="wd-total-addition" className="wd-addition-button">+</button>
          </span>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Assignments/123">
              A1 - ENV + HTML
            </a>
            <div>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts</div>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Assignments/124">
              A2 - CSS + BOOTSTRAP
            </a>
            <div>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts</div>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Assignments/125">
              A3 - JAVASCRIPT + REACT
            </a>
            <div>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts</div>
          </li>
        </ul>
      </div>
    );
  }
  