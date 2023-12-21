import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToHistoryAPI, removeHistoryAPI } from "../Services/allAPI";

function WatchHistory() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getToHistoryAPI();
    if (result.status == 200) {
      setHistory(result.data);
    } else {
      console.log(`Api failed`);
      console.log(result.message);
    }
    
  };
  const removeHistoryItem = async (id) =>{
    await removeHistoryAPI(id)
    getHistory()
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mt-5 container">
        <h3>WatchHistory</h3>
        <Link to={"/home"}>
          <i class="fa-solid fa-arrow-left fa-beat"></i>Back to Home
        </Link>
      </div>
      <table className="table mb-5 container shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Video Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>
              <i class="fa-solid fa-ellipsis"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {history?.length > 0 ? (
            history.map((video, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{video?.caption}</td>
                <td>
                  <a href={video?.link} target="_blank">
                    {video?.link}
                  </a>
                </td>
                <td>{video.timestamp}</td>
                <td>
                  <button onClick={()=>removeHistoryItem(video?.id)} className="btn text-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p>Your Watch History is Empty!!</p>
          )}
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory;
