import React, { useContext, useEffect } from "react";
import TrendingVideoCard from "./TrendingVideoCard";
import setContext from "../../Context/Context";


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
        // videoCategoryId: "42",
      })
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

function Trending() {
  const { trendingData, setTrendingData } = useContext(setContext);
  useEffect(function () {
    makeRequest().then((ytData) => {
      setTrendingData(ytData);
    });
  }, []);
  console.log(trendingData, "trending");

  if (trendingData !== null) {
    return (
      <div className="TrendingVideos">
        {trendingData.items.map((element) => {  
          return (
            <TrendingVideoCard
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

export default Trending;
