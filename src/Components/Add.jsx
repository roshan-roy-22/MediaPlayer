import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center ">
        <h2>upload video</h2>
        <button
          variant="primary"
          onClick={handleShow}
          style={{ color: "white" }}
          className="
      btn"
        >
          <i class="fa-solid fa-upload fa-2x"></i>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Uploading New Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Please Fill The Details!!!</h5>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter video id"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="enter video id" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Enter video caption"
            >
              <Form.Control
                type="password"
                placeholder="Enter video caption"
                className="mb-3"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter video id"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="enter image URL" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter image URL"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="enter youtube link" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter youtube link"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="enter video id" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Add;
