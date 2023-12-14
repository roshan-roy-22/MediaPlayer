import React from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import View from "../Components/View"
import Category from "../Components/Category";
function Home() {
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add />
        </div>
        <Link
          to="/history"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          Watch history
        </Link>
      </div>
      <div className="container-fluid w-100 mt-3 mb-3 row">
        <div className="all-videos col-lg-9">
          <h3>All uploaded videos</h3>
          <View/>
        </div>
        <div className="category col-lg-3">
          <Category/>
        </div>
      </div>
    </>
  );
}

export default Home;
