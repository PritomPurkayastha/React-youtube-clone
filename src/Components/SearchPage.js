import React, { useContext, useEffect } from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import setContext from "../Context/Context";
import SearchPageVideoCard from "./SearchPageVideoCard";


let search_url = "https://www.googleapis.com/youtube/v3/search?";

function makeSearchRequest(input) {
  console.log(input);
  return fetch(
    search_url +
      new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet",
        maxResults: 5,
        // videoCategoryId: 10,
        q: input,
      })
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

function SearchPage() {
  const { searchData, setSearchData, searchInput } = useContext(setContext);
  useEffect(
    function () {
      makeSearchRequest(searchInput).then((ytSearchData) => {
        console.log(ytSearchData);
        setSearchData(ytSearchData);
      });
    },
    [searchInput]
  );
  if (searchData !== null) {
    return (
      <div className="searchPage">
        <div className="filter">
          <TuneOutlinedIcon className="filterIcon" />
          <p>FILTERS</p>
        </div>
        {searchData.items.map((element) => {
          return (
            <SearchPageVideoCard
              image={element.snippet.thumbnails.medium.url}
              title={element.snippet.title}
              time="3 days ago"
              channel={element.snippet.channelTitle}
              channelId={element.snippet.channelId}
              ytChannelId={element.id.channelId}
              key={element.id.videoId}
              id={element.id.videoId}
              description={element.snippet.description}
              channelTitle={element.snippet.channelTitle}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchPage;
