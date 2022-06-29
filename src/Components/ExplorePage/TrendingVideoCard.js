import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingVideoCard.css";
import setContext from "../../Context/Context";

function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

export default function TrendingVideoCard({
  image,
  title,
  channel,
  views,
  likes,
  time,
  channelLogo,
  channelId,
  id,
  description,
  NumberOfComments,
}) {
  const {
    setId,
    setTitle,
    setViews,
    setLikes,
    setDescription,
    setShowMore,
    setCommentCount,
  } = useContext(setContext);

  let view = nFormatter(views);
  let like = nFormatter(likes);
  let navigate = useNavigate();

  return (
    <div className="TrendingVideoCard">
      <img
        className="TrendingThumbnail"
        src={image}
        alt="Thumbnail"
        onClick={() => {
          navigate(`/watch?v=${id}`);
          setId(id);
          setTitle(title);
          setViews(views);
          setLikes(like);
          setDescription(description);
          setShowMore(true);
          setCommentCount(NumberOfComments);
        }}
      />
      <div className="TrendingVideoInfo">
        <div className="videoTitle">{title}</div>
        <div className="channelTitle">
            {channel}
            <div className="videoData">{view} · {time}</div>
        </div>
        <div className="Videodescription">{description !== undefined ? description.substr(0,200): null}...</div>
      </div>
    </div>
  );
}
