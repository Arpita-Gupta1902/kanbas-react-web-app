import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" /> <br />
      <input id="wd-password" placeholder="password" type="password" /> <br />
      <Link  id="wd-signin-btn"
             to="/Kanbas/Dashboard"> Sign in </Link> <br />
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
      <h3>Full Name: Arpita Gupta</h3>
      <h3>Section: 02</h3>
      <h3>Lab Assignment Links:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423279">Assignment 1</a>
      <h3>Link to the Kanbas application</h3>
      <a id="wd-kanbas-link" href="https://main--gregarious-entremet-079863.netlify.app/#/Kanbas/Account/Signin">Kanbas Application</a>
      <h3>Links to all relevant source code repositories</h3>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app">Github Repository</a>
      <h3>Editor page link</h3>
      <a id="wd-editor-link" href="https://main--gregarious-entremet-079863.netlify.app/#/Kanbas/Courses/1234/Assignments/Editor">Editor Page Link</a>
    </div>
);}

