import React from "react";
import "./Videos.css";
import VideoCard from "./VideoCard";
import { useEffect, useContext } from "react";
import setContext from "../Context/Context";
// import { ElevenMp } from "@mui/icons-material";



let video = "https://www.googleapis.com/youtube/v3/videos?";

function makeRequest() {
  return fetch(
    video +
      new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet, statistics",
        chart: "mostPopular",
        maxResults: 5,
        // regionCode: "IN",
        
      })
  ).then((res) => res.json()).catch((error)=>{
    console.log(error)
  });
}

function Videos() {
  const{data, setData}=useContext(setContext)
  useEffect(function () {
     makeRequest().then((ytData) => {
      setData(ytData);
    });
  }, []);
  // console.log(data);
  // console.log("awdaw", title)
  if(data!==null){
    return (
      <div className="videos">
       { data.items.map((element)=>{
          return <VideoCard
          image={element.snippet.thumbnails.medium.url}
          title={element.snippet.title}
          channelLogo=""
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
       })}
      </div>
    );
  }
  
}

export default Videos;
