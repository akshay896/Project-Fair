import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className="shadow btn ">
        <Card.Img variant="top" height={"200px"} src="" />
        <Card.Body>
          <Card.Title>Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src="" alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>
                <span className="fw-bolder">Language Used :</span>
                <span className="text-danger">React</span>
              </h6>
              <p style={{ textAlign: "justify" }}>
                <span className="fw-bolder">
                  Project Overview :
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="float-start mt-2">
            <a
              href="https://gitjub.com/Luminar-Technolab/Counter-Redux-sep-23-B2"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              className="btn btn-secondary ms-2"
              href="https://pf-app-sep23-b2.vercel.app/"
              target="_blank"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
