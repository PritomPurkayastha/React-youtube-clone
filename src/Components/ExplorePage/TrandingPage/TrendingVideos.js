import React from "react";
import "./TrendingVideos.css";
import Trending from "../Trending";
import Music from "./Music";
import Gaming from "./Gaming";
import Films from "./Films";
import setContext from "../../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function TrendingVideos() {
  const { trendingCategory, setTrendingCategory } = useContext(setContext);
  let navigate = useNavigate();
  return (
    <div className="TrandingVideos">
      <div className="Trending">
        <img
          src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"
          alt="thumbnail"
        />
        <h2>Trending</h2>
      </div>
      <div className="pages">
        <div
          className="trendingCategory"
          onClick={() => {
            navigate("/feed/trending");
            setTrendingCategory(<Trending />);
          }}
        >
          NOW
        </div>
        <div
          className="trendingCategory"
          onClick={() => {
            navigate("/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D");
            setTrendingCategory(<Music />);
          }}
        >
          MUSIC
        </div>
        <div
          className="trendingCategory"
          onClick={() => {
            navigate(
              "/feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D"
            );
            setTrendingCategory(<Gaming />);
          }}
        >
          GAMING
        </div>
        <div
          className="trendingCategory"
          onClick={() => {
            navigate(
              "/feed/trending?bp=4gIKGgh0cmFpbGVycw%3D%3D"
            );
            setTrendingCategory(<Films />);
          }}
        >
          FILMS
        </div>
      </div>
      <div className="trendingVideos">{trendingCategory}</div>
    </div>
  );
}

export default TrendingVideos;
