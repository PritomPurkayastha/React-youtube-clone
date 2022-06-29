import React, { useContext, useEffect } from "react";
import FilmsVideoCard from "./FilmsVideoCard";
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
        regionCode: "IN",
        videoCategoryId: "10",
      })
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

function Films() {
  const { films, setFilms } = useContext(setContext);
  
  useEffect(function () {
    makeRequest().then((ytData) => {
        setFilms(ytData);
    });
  }, []);

  console.log(films , "films")
  if (films !== null) {
    return (
      <div className="films">
        {films.items.map((element) => {
          return (
            <FilmsVideoCard
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

export default Films;
