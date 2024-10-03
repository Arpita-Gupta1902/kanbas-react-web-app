import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModulesControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" >
            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />Week 1<ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
                </span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" />READING<ModuleControlButtons /></span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating Us<LessonControlButtons /></li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating an HTPP Server with Node.js<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons /></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />Week 2<ModuleControlButtons /></div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify<LessonControlButtons /></li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to HTML and the DOM<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Formatting web content with headings and<LessonControlButtons /></li>
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Formatting content with lists and tables<LessonControlButtons /></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}  