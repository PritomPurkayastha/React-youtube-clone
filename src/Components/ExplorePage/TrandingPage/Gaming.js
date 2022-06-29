import setContext from "../../../Context/Context";
import GamingVideoCard from "./GamingVideoCard";
import React, { useContext, useEffect } from "react";


let video = "https://www.googleapis.com/youtube/v3/videos?";

function makeRequest() {
  return fetch(
    video +
      new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet, statistics",
        chart: "mostPopular",
        maxResults: 5,
        regionCode: "IN",
        videoCategoryId: "20",
      })
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

function Gaming() {
  const { gaming, setGaming } = useContext(setContext);
  useEffect(function () {
    makeRequest().then((ytData) => {
      setGaming(ytData);
    });
  }, []);

  if (gaming !== null) {
    return (
      <div className="gaming">
        {gaming.items.map((element) => {
          return (
            <GamingVideoCard
              image={element.snippet.thumbnails.medium.url}
              title={element.snippet.title}
              views={element.statistics.viewCount}
              likes={element.statistics.likeCount}
              time="3 days ago"
              channel={element.snippet.channelTitle}
              channelId={element.snippet.channelId}
              key={element.id}
              id={element.id}
              description={element.snippet.description}
              NumberOfComments={element.statistics.commentCount}
            />
          );
        })}
      </div>
    );
  }
}

export default Gaming;
