import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ paddingLeft: "30px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses"  className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/logo192.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Developer
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/docker.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS2234 Docker
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Devops Engineering
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/db.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1244 Database
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Database Systems
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px"}}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/cloud.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1235 Cloud
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Cloud Computing
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px"}}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/net.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1237 .NET
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Introduction to C# and .NET
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px"}}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/network.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3344 Networking
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Networking Fundamentals
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", paddingTop: "35px", marginBottom: "35px"}}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/git.png"  width="100%" height={200}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1284 Git
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Versioning Control Systems
                  <br/>
                  Fall 2024 Full Term Section 2
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
