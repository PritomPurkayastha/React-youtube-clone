import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import "./VideoCard.css";
import setContext from "../Context/Context";
import { useNavigate } from "react-router-dom";


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


function VideoCard({
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
    setThumbnail,
  } = useContext(setContext);

  let view = nFormatter(views);
  let like = nFormatter(likes);
  let navigate = useNavigate();



  return (
    <div className="videoCard">
      <img
        className="thumbnail"
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
          setThumbnail(image);
        }}
      />
      <div className="videoCardInfo">
        <Avatar className="avatar" src={channelLogo} alt={channel} />
        <div className="videoTitle" onClick={() => {
          navigate(`/watch?v=${id}`);
          setId(id);
          setTitle(title.substr(0,50));
          setViews(views);
          setLikes(like);
          setDescription(description);
          setShowMore(true);
          setCommentCount(NumberOfComments);
        }}>
          <h4>{title.substr(0,50)}...</h4>
          <span className="details">{channel}</span>
          <div className="details">
            {view} · {time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
