import React from "react";
import { BsPlayBtn } from "react-icons/bs";

const Video = () => {
  return (
    <div>
      <div className="container-fluid mt-2">
        <div className="row justify-content-center">
          <div className="col-12 video-background text-light">
            <h4>What Solar Can Do For You?</h4>
            <a href="#" className="text-light">
              <BsPlayBtn size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
