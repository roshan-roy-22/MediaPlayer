import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Videocard from "./Videocard";
import { getAllVideoAPI } from "../Services/allAPI";

function View(uploadVideoResponse) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false);
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse]);

  const getAllUploadedVideos = async () => {
    const result = await getAllVideoAPI();
    if (result.status === 200) {
      console.log(result);
      setAllVideos(result.data);
    } else {
      console.log("API failed");
      setAllVideos([]);
    }
  };

  return (
    <>
      <Row className="mx-auto ">
        {allVideos?.length > 0 ? (
          allVideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Videocard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
            </Col>
          ))
        ) : (
          <p className="">No video</p>
        )}
      </Row>
    </>
  );
}

export default View;
