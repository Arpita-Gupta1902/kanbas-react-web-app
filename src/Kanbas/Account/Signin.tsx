import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.Users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };
  return (
    <div>
      <div id="wd-signin-screen" className="col-6">
      <h3>Signin</h3>
      <input defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             placeholder="username"  className="form-control mb-2" id="wd-username"/>
      <input defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             placeholder="password" type="password"  className="form-control mb-2" id="wd-password"/>
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
      <Link to="/Kanbas/Account/Signup" >Sign up</Link>
    </div>
    <div className="card mb-3" style={{marginTop:"70px"}}>
    <div className="card-body">
      <h3>Full Name: Arpita Gupta</h3>
      <h3>Section: 02</h3>
      <h3>Assignment 1 Link:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423279">Assignment 1</a>
      <h3>Assignment 2 Link:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423280">Assignment 2</a>
      <h3>Assignment 3 Link:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423281">Assignment 3</a>
      <h3>Assignment 4 Link:</h3>
      <a id="wd-assng-link" href="https://northeastern.instructure.com/courses/192548/assignments/2423282">Assignment 4</a>
      <h3>Link to the Kanbas application</h3>
      <a id="wd-kanbas-link" href="https://celebrated-scone-b94a59.netlify.app/#/Kanbas/Account/Signin">Kanbas Application</a>
      <h3>Links to all relevant source code repositories</h3>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app">Github Repository</a>
      <br/>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app/tree/a2">Github Repository a2 branch</a>
      <br/>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app/tree/a3">Github Repository a3 branch</a>
      <br/>
      <a id="wd-github" href="https://github.com/Arpita-Gupta1902/kanbas-react-web-app/tree/a4">Github Repository a4 branch</a>
      </div>
      </div>
    </div>
);}

