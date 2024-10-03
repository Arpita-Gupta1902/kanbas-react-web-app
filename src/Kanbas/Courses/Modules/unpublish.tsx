import { FaBan, FaCircle } from "react-icons/fa";

export default function Unpublish() {
  return (
    <span className="me-1 position-relative">
      <FaBan
        style={{ top: "2px", color: "grey" }}
        className="me-1 position-absolute fs-5"
      />
      <FaCircle className="text-light me-1 fs-6" />
    </span>
  );
}
