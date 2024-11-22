import { FaSearch, FaPlus, FaCalendarAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { Modal, Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { addAssignments } from "./reducer";
import { useDispatch } from "react-redux";
import React from "react";
import useIsFaculty from "../../Account/useIsFaculty";
import {
  createAssignmentForCourse,
  findAssignmentsForCourse,
  deleteAssignment,
  updateAssignment,
} from "./client";

interface AssignmentControlsProps {
  cid: string | undefined;
}

export const AssignmentControls = (props: AssignmentControlsProps) => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserIsFaculty = useIsFaculty();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleUpdateData = (newValue: any) => {
  //   dispatch(addAssignments(newValue));
  // };

  const handleUpdateData = async (newAssignment: any) => {
    if (cid) {
      try {
        const createdAssignment = await createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignments(createdAssignment));
      } catch (error) {
        console.error("Failed to create assignment:", error);
      }
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search Assignments"
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>

      <div>
        <button
          id="wd-add-module-btn"
          className="btn btn-lg me-1 bg-light"
          style={{
            fontWeight: 400,
            borderRadius: 0,
            border: "1px solid #d3d3d3",
          }}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
        {UserIsFaculty && (<button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1"
          style={{ borderRadius: 0 }}
          onClick={handleShow}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>)}
        <AssignmentModal
          cid={cid}
          show={show}
          onHide={handleClose}
          onSave={handleUpdateData}
        />
      </div>
    </div>
  );
};

const CustomDateTimeInput: React.FC<{
  selectedDate: string;
  setSelectedDate: any;
}> = ({ selectedDate, setSelectedDate }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setSelectedDate(formatDate(selectedDate));
  };
  const formatDate = (date: Date): string => {
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className="input-container">
      <div className="date-display">{selectedDate || ""}</div>
      <div className="calendar-icon" onClick={handleIconClick}>
        <FaCalendarAlt />
        <input
          ref={inputRef}
          type="datetime-local"
          className="date-time-picker"
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

interface AssignmentModalProps {
  cid: string | undefined;
  show: boolean;
  onHide: () => void;
  onSave: (data: any) => void;
}

const AssignmentModal: React.FC<AssignmentModalProps> = ({
  cid,
  show,
  onHide,
  onSave,
}) => {
  const [name, setName] = useState("New Assignment Name");
  const [description, setDescription] = useState("New Assignment Description");
  const [points, setPoints] = useState<number | "">(100);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  const handleSave = async () => {
    // onSave({
    //   course: cid,
    //   _id: `A${Date.now()}`,
    //   title: name,
    //   points,
    //   due_date: dueDate,
    //   available_until: availableUntil,
    //   available_date: availableFrom,
    //   description: description,
    // });
    // onHide();
    const newAssignment = {
      course: cid,
      _id: `A${Date.now()}`,
      title: name,
      points,
      due_date: dueDate,
      available_until: availableUntil,
      available_date: availableFrom,
      description: description,
    };

    try {
      await onSave(newAssignment);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Assignment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="col mb-3">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div
            className="col d-flex mb-3"
            contentEditable="true"
            style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
          >
            <input
              id="wd-name"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div
            className="mb-3 col d-flex align-items-center"
            contentEditable="true"
          >
            <label
              htmlFor="wd-points"
              className="col-2 form-label me-2 mb-0"
              style={{ textAlign: "right" }}
            >
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={points}
              onChange={(e) => setPoints(e.target.valueAsNumber)}
            />
          </div>

          <div className="col mb-3 d-flex">
            <label
              htmlFor="wd-submission-type"
              className="col-2 form-label me-2 mb-0"
              style={{ textAlign: "right" }}
            >
              Assign
            </label>
            <div className="card col">
              <div className="form-group p-3">
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label htmlFor="due-date">
                      <strong>Due</strong>
                    </label>
                    <CustomDateTimeInput
                      selectedDate={dueDate}
                      setSelectedDate={setDueDate}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="available-from">
                      <strong>Available from</strong>
                    </label>
                    <CustomDateTimeInput
                      selectedDate={availableFrom}
                      setSelectedDate={setAvailableFrom}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="available-until">
                      <strong>Until</strong>
                    </label>
                    <CustomDateTimeInput
                      selectedDate={availableUntil}
                      setSelectedDate={setAvailableUntil}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          className="btn btn-danger"
          variant="primary"
          onClick={handleSave}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
