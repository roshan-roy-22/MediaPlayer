import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container mt-4 ">
      <div className="row align-items-center ">
        <div className="col-lg-4">
          <h4>
            Welcome to <span className="text-warning ">Media Player</span>
          </h4>
          <p>
            Media player Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident, ipsa unde. Facere eligendi quae saepe explicabo,
            molestias incidunt iste debitis? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, minus!
          </p>
          <Link to={'/home'} className="btn btn-info mt-5 fw-bolder  ">Get Started</Link>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <img
            className="'img-fluid"
            src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt=""
          />
        </div>
      </div>
      <div className="mb-5">
        <h3 className="text-center mb-5">Features</h3>
        <div className="d-flex justify-content-evenly mb-5">
          <Card style={{ width: "22rem" }}>
            <Card.Img
              style={{ width: "400px", height: "400px" }}
              variant="top"
              src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif"
            />
            <Card.Body className="text-white">
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "22rem" }}>
            <Card.Img
              style={{ width: "350px", height: "400px" }}
              variant="top"
              src="https://i.gifer.com/Z23N.gif"
            />
            <Card.Body className="text-white">
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "22rem" }}>
            <Card.Img
              style={{ width: "400px", height: "400px" }}
              variant="top"
              src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif"
            />
            <Card.Body className="text-white">
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-5 border rounded align-items-center p-5">
        <div className="col-lg-5">
          <h3 className="text-warning mb-5">Simple , fast and powerfull</h3>
          <p style={{ textAlign: "justify" }}>
            {" "}
            <span className="fs-5 ">Play Everything</span>: Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsam magnam vel quos eveniet
            aliquam nam pariatur, quia qui sunt distinctio.
          </p>
          <p style={{ textAlign: "justify" }}>
            {" "}
            <span className="fs-5 ">Play Everything</span>: Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsam magnam vel quos eveniet
            aliquam nam pariatur, quia qui sunt distinctio.
          </p>
          <p style={{ textAlign: "justify" }}>
            {" "}
            <span className="fs-5 ">Play Everything</span>: Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsam magnam vel quos eveniet
            aliquam nam pariatur, quia qui sunt distinctio.
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <iframe
            width="588"
            height="387"
            src="https://www.youtube.com/embed/IqwIOlhfCak"
            title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
