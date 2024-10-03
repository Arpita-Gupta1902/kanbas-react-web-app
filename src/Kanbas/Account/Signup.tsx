import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="col-6 row d-flex" style={{paddingLeft:"10px"}}>
      <h3 style={{paddingLeft:"5px"}}>Signup</h3>
      <input placeholder="username"  className="form-control mb-2"/>
      <input placeholder="password" type="password"  className="form-control mb-2"/>
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Signup </Link>
      <Link to="/Kanbas/Account/Signin" style={{paddingLeft:"5px"}} >Signin</Link>
    </div>
);}

