import { Link, useParams, useLocation } from "react-router-dom";
import { Courses as courses } from "../Database";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const location = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const getLinkPath = (link: string) =>
    `/Kanbas/Courses/${course?._id}/${link}`;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = getLinkPath(link);
        const isActive = location.pathname === path;

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
