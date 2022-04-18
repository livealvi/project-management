import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faPlus } from "@fortawesome/free-solid-svg-icons";

const ToDo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* card */}
      <div className="mt-5">
        <Card className="card">
          <Card.Body>
            <Card.Title>
              <h5 className="card-title">
                <span className="text-uppercase fw-bold">To Do</span>
                <span className="fw-light">10</span>
              </h5>
            </Card.Title>
          </Card.Body>
          <div
            onClick={handleShow}
            className="create-issue d-flex align-items-center justify-content-center text-center p-3 mb-3"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span className="ms-3">Create Issue</span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ToDo;
