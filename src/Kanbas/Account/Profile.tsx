import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-profile-screen" className="row d-flex" style={{paddingLeft:"10px"}}>
      <h3 style={{paddingLeft:"5px"}}>Profile</h3>
      {profile && (
        <div>
      <input id="wd-username" value={profile.username} placeholder="username"  className="form-control mb-2" onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/><br/>
      <input id="wd-password" value={profile.password} placeholder="password"
             type="password"  className="form-control mb-2" onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/><br/>
      <input id="wd-firstname" value={profile.firstName} placeholder="First Name"  className="form-control mb-2" onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/><br/>
      <input id="wd-lastname" value={profile.lastName} placeholder="Last Name"  className="form-control mb-2" onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/><br/>
      <input id="wd-dob" value={profile.dob} type="date"  className="form-control mb-2" onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/><br/>
      <input id="wd-email" value={profile.email} type="email"  className="form-control mb-2" onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/><br/>
      <select id="wd-role" value={profile.role} className="form-control mb-2" onChange={(e) => setProfile({ ...profile, role:  e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <div>
      <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
      <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
      </button>
      </div>
      </div>
      )}
    </div>
);}

