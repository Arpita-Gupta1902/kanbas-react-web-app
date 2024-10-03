import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div>
      <div id="wd-signin-screen" className="col-6">
      <h3>Signin</h3>
      <input placeholder="username"  className="form-control mb-2"/>
      <input placeholder="password" type="password"  className="form-control mb-2"/>
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Signin </Link>
      <Link to="/Kanbas/Account/Signup" >Signup</Link>
    </div>
    <div className="card mb-3" style={{marginTop:"70px"}}>
    <div className="card-body">
      <h3>Full Name: Arpita Gupta</h3>
      <h3>Section: 02</h3>
      <h3>Assignment 1 Link:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423279">Assignment 1</a>
      <h3>Assignment 2 Link:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423280">Assignment 2</a>
      <h3>Link to the Kanbas application</h3>
      <a id="wd-kanbas-link" href="https://tiny-parfait-8c76c2.netlify.app/#/Kanbas/Account/Signin">Kanbas Application</a>
      <h3>Links to all relevant source code repositories</h3>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app">Github Repository</a>
      <br/>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app/tree/a2">Github Repository a2 branch</a>
      </div>
      </div>
    </div>
);}

