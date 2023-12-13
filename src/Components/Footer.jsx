import React from "react";
import { Link } from "react-router-dom";






function Footer() {
  return (
    <>
      <div className="">
        <footer className="container d-flex justify-content-between align-items-center  ">
          <div className="w-25 ">
            <h4 style={{height:"45px"}}>
              <i class=" fa-solid fa-cloud-arrow-up "></i>Media Player
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui
              cum sequi id quae ad, deleniti dignissimos dolores voluptatum
              possimus voluptatibus laudantium ex inventore maxime fugit?
            </p>
          </div>
          <div className="w-25">
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <p>Landing page</p>
            </Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>
            <p>Home</p>
            </Link>
            <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>
            <p>Watch History</p>
            </Link>
          </div>
          <div className="w-25">
            <h4>Guides</h4>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>React Routing</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <div className="d-flex">
              <input
                placeholder="Enter Your E-mail"
                type="text"
                className="form-control"
              />
              <button className="btn btn-info ms-3">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="fs-5 text-white d-flex justify-content-between mt-3">
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </footer>
        <div>
          <p className="text-center">
            Copyright &copy; 2023 Media Player.Built With React
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
