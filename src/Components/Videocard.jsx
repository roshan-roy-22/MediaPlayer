import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

function Videocard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <Card.Img
          onClick={handleShow}
          height={"200px"}
          variant="top"
          src="https://m.media-amazon.com/images/M/MV5BMDQwOTI3NTMtZjA0My00M2E3LThmODUtODdiNTQ3ZjNiNGE3XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg"
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>Video title</h6>
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <iframe className="w-100 "
            
            height="384"
            src="https://www.youtube.com/embed/8FkLRUJj-o0"
            title="ANIMAL (OFFICIAL TRAILER): Ranbir Kapoor | Rashmika M, Anil K, Bobby D | Sandeep Vanga | Bhushan K"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* You can add additional buttons or actions here */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Videocard;
