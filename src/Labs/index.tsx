import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h3>Full Name: Arpita Gupta</h3>
      <h3>Section: 02</h3>
      <table>
      <tr>
        <td><h3>Lab Assignment Links:</h3></td>
        <td><a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423279">Assignment 1</a></td>
      </tr>
      <tr>
        <td><h3>Link to the Kanbas application:</h3></td>
        <td><a id="wd-kanbas-link" href="https://main--gregarious-entremet-079863.netlify.app/#/Kanbas/Account/Signin">Kanbas Application</a></td>
      </tr>
      <tr>
        <td><h3>Links to all relevant source code repositories:</h3></td>
        <td><a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app">Github Repository</a></td>
      </tr>
      <tr>
        <td><h3>Editor page link:</h3></td>
        <td><a id="wd-editor-link" href="https://main--gregarious-entremet-079863.netlify.app/#/Kanbas/Courses/1234/Assignments/Editor">Editor Page Link</a></td>
      </tr>
    </table>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}

