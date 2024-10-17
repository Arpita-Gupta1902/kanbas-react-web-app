import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const Courses = db.Courses;
  return (
    <div id="wd-dashboard" style={{ paddingLeft: "30px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({Courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {Courses.map((Course) => (
            <div
              className="wd-dashboard-course col"
              style={{
                width: "260px",
                paddingTop: "35px",
                marginBottom: "35px",
              }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${Course._id}/Home`}
                >
                  <img
                    src={`/images/${Course._id}.png`}
                    width="100%"
                    height={200}
                  />
                  <div className="card-body">
                    <h5
                      className="wd-dashboard-course-title card-title"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {Course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {Course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
