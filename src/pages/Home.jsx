import React from "react";
import { Link } from "react-router-dom";
import HomeIMG from "../assets/Homeimg.png";
import ProjectCard from "../components/ProjectCard";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center rounded shadow w-100"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}>
                <i className="fa-brands fa-docker"></i>Project Fair
              </h1>
              <p style={{ textAlign: "justify" }}>
                One stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as
                projects available in our website... what are you waiting for!!
              </p>
              {sessionStorage.getItem("token")? 
                <Link to="/dashboard" className="btn btn-warning">
                  MANAGE YOUR PROJECTS
                </Link>
               : 
                <Link to="/login" className="btn btn-warning">
                  START TO EXPLORE
                </Link>
              }
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={HomeIMG} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <button className="btn btn-link mt-5">
          CLICK HERE VIEW MOE PROJECTS...
        </button>
      </div>
      <div className="d-flex align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                  alt=""
                />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
                  alt=""
                />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png"
                  alt=""
                />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
