import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import setContext from "../../Context/Context";
import "./SuggestedVideoCard.css";

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

function SuggestedVideoCard({
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
  console.log(views)
  let view =nFormatter(views);
  let like = nFormatter(likes);
  // let comment=numberWithCommas.toLocaleString("en-US");
  let navigate = useNavigate();

  return (
    <div className="suggestedVideoCard">
      <div className="thumbnailArea">
        <img
          className="sideBarThumbnail"
          src={image}
          alt="Thumbnail"
          onClick={() => {
            navigate(`/watch?v=${id}`);
            setId(id);
            setTitle(title);
            setViews(view);
            setLikes(like);
            setDescription(description);
            setShowMore(true);
            setCommentCount(NumberOfComments);
          }}
        />
      </div>
      <div className="videoInformation">
        <div
          className="videoTitle"
          onClick={() => {
            navigate(`/watch?v=${id}`);
            setId(id);
            setTitle(title);
            setViews(view);
            setLikes(like);
            setDescription(description);
            setShowMore(true);
            setCommentCount(NumberOfComments);
          }}
        >
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

export default SuggestedVideoCard;
