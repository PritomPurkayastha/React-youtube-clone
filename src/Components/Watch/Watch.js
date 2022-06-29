import React from "react";
import SuggestedVideos from "./SuggestedVideos";
import WatchVideos from "./WatchVideos";
import "./Watch.css";

function Watch() {
  // console.log(id);
  // console.log(views);
  return (
    <div className="watch">
      <div className="watchPage">
        <WatchVideos className="video"/>
        <SuggestedVideos className="suggestedVideos"/>
      </div>
    </div>
  );
}

export default Watch;
