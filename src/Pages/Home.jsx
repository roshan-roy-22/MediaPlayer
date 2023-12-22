import React,{useState} from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import View from "../Components/View"
import Category from "../Components/Category";

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse]=useState({})
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <Link
          to="/history"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          Watch history <i class="fa-solid fa-clock-rotate-left"></i>
        </Link>
      </div>
      <div className="container-fluid w-100 mt-3 mb-3 row">
        <div className="all-videos col-lg-9">
          <h3>All uploaded videos</h3>
          <View uploadVideoResponse={uploadVideoResponse}/>
        </div>
        <div className="category col-lg-3">
          <Category/>
        </div>
      </div>
    </>
  );
}

export default Home;
