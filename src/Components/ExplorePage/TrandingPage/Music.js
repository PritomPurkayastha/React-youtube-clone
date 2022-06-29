import React, { useContext, useEffect } from "react";
import MusicVideoCard from "./MusicVideoCard";
import setContext from "../../../Context/Context";


let video = "https://www.googleapis.com/youtube/v3/videos?";

function makeRequest() {
  return fetch(
    video +
      new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet, statistics",
        chart: "mostPopular",
        maxResults: 50,
        // regionCode: "IN",
        videoCategoryId: "10",
      })
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

function Music() {
  const { trendingMusic, setTtrendingMusic } = useContext(setContext);
  useEffect(function () {
    makeRequest().then((ytData) => {
      setTtrendingMusic(ytData);
    });
  }, []);
  // console.log(trendingMusic, "music");
  if (trendingMusic !== null) {
    return (
      <div className="music">
        {trendingMusic.items.map((element) => {
          return <MusicVideoCard
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
          />;
        })}
      </div>
    );
  }
}

export default Music;
