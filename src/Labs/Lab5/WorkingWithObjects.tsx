import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`  
      
      const [module, setModule] = useState({
        id: 1, name: "Web Dev",
        description: "Create a full stack application",
        course: "Web Development", completed: false, score: 0,
      });

      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Retrieving Module Objects</h4>
      <a id="wd-retrieve-module-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <a id="wd-retrieve-module-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
      <h4>Updating Module Objects</h4>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input className="form-control w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />
      <a id="wd-update-module-score"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/score/${module.score}`}>
        Update Score
      </a>
      <input className="form-control w-75" id="wd-module-score"
        defaultValue={module.score} onChange={(e) =>
          setModule({ ...module, score: Number(e.target.value) })}/>
      <hr />
      <a id="wd-update-module-completed"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/completed/${module.completed}`}>
        Update Completed
      </a>
      <input
        type="checkbox"
        id="wd-module-completed"
        checked={module.completed}
        onChange={(e) =>
            setModule({ ...module, completed: e.target.checked })
        }
        />
      <hr />
    </div>
);}

