import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faPlus } from "@fortawesome/free-solid-svg-icons";

const InProgress = (props) => {
  const { taskInProgress } = props.inProgress;
  const totalInProgress = taskInProgress.length;

  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>In Progress</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label for="exampleFormControlTextarea1" className="form-label">
              Example Title:{" "}
              <span className="fw-bold">Building Landing Page</span>
            </label>
            <Form.Control
              as="textarea"
              rows={3}
              value={name}
              type="text"
              id="task_title"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* card */}
      <div className="mt-5">
        <Card className="card-bg">
          <Card.Body>
            <Card.Title>
              <h5 className="card-title">
                <span className="text-uppercase fw-bold">In Progress</span>
                <span className="fw-light">{totalInProgress}</span>
              </h5>
            </Card.Title>
            {taskInProgress.map((inProgress) => (
              <a href="" key={inProgress.id}>
                <div className="inside-card">
                  <div className="card-body">
                    <h5 className="card-title">{inProgress.task_title}</h5>
                  </div>
                </div>
              </a>
            ))}
          </Card.Body>
          <div
            onClick={handleShow}
            className="create-issue d-flex align-items-center justify-content-center text-center p-3 mb-3"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span className="ms-2 fw-bold">Create Issue</span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default InProgress;
