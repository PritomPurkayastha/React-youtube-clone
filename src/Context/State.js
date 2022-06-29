import setContext from "./Context";
import { useState } from "react";
import React from "react";
import Trending from "../Components/ExplorePage/Trending";
function State({ children }) {
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [views, setViews] = useState(null);
  const [likes, setLikes] = useState(null);
  const [description, setDescription] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [commentCount, setCommentCount] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [trendingData, setTrendingData] = useState(null);
  const [trendingCategory, setTrendingCategory] = useState(<Trending />);
  const [trendingMusic, setTtrendingMusic] = useState(null);
  const [gaming, setGaming] = useState(null);
  const [films, setFilms] = useState(null);
  const [signIn, setSignIn] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  if (id !== null) {
    localStorage.setItem("id", id);
  }
  if (title !== null) {
    localStorage.setItem("title", title);
  }
  if (views !== null) {
    localStorage.setItem("views", views);
  }
  if (likes !== null) {
    localStorage.setItem("likes", likes);
  }
  if (description !== null) {
    localStorage.setItem("description", description);
  }
  if (commentCount !== null) {
    localStorage.setItem("commentCount", commentCount);
  }
  if (data !== null) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  if (thumbnail !== null) {
    localStorage.setItem("thumbnail", thumbnail);
  }
  const arr=[];
  localStorage.setItem("arr", arr);

  return (
    <setContext.Provider
      value={{
        menu,
        setMenu,
        data,
        setData,
        id,
        setId,
        channelData,
        setChannelData,
        setTitle,
        setViews,
        setLikes,
        setDescription,
        showMore,
        setShowMore,
        setCommentCount,
        isVisible,
        setIsVisible,
        inputData,
        setInputData,
        input,
        setInput,
        searchData,
        setSearchData,
        searchInput,
        setSearchInput,
        trendingData,
        setTrendingData,
        trendingCategory,
        setTrendingCategory,
        trendingMusic,
        setTtrendingMusic,
        gaming,
        setGaming,
        films,
        setFilms,
        signIn,
        setSignIn,
        thumbnail,
        setThumbnail,
      }}
    >
      {children}
    </setContext.Provider>
  );
}

export default State;
