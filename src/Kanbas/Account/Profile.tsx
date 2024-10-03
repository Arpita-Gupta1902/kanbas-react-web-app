import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="col-4 row d-flex" style={{paddingLeft:"10px"}}>
      <h3 style={{paddingLeft:"5px"}}>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username"  className="form-control mb-2"/><br/>
      <input id="wd-password" value="123" placeholder="password"
             type="password"  className="form-control mb-2"/><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name"  className="form-control mb-2"/><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name"  className="form-control mb-2"/><br/>
      <input id="wd-dob" value="default" type="date"  className="form-control mb-2"/><br/>
      <input id="wd-email" value="alice@wonderland.com" type="email"  className="form-control mb-2"/><br/>
      <select id="wd-role"  className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger form-control mb-2">Sign out</Link>
    </div>
);}

