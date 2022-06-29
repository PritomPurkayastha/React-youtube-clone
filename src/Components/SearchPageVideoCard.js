import React, { useContext } from "react";
import "./SearchPageVideoCard.css";
import setContext from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


function SearchPageVideoCard({
  image,
  title,
  time,
  channel,
  channelId,
  ytChannelId,
  id,
  description,
  channelTitle,
}) {
  const {
    setId,
    setTitle,
    setDescription,
    setShowMore,

  } = useContext(setContext);


  let navigate = useNavigate();
  console.log(ytChannelId);
  if (ytChannelId !== undefined) {
    return (
      <div className="channelDetails">
        <div className="channelInfoArea">
          <div className="avaterArea">
            {/* <Avatar src={image} className="searchPageChannelLogo" /> */}
            <Avatar className="avatarLogo">
              <img src={image} alt="avatarLogo"/>
            </Avatar>
          </div>
          <div className="information">
            <div className="channelTitle">{channelTitle}</div>
            <div className="channelData">
              100 subscriber · 100 videos
              <div className="Channeldescription">{description}</div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="subscribe">SUBSCRIBE</button>
          <NotificationsNoneOutlinedIcon className="bellIcon" />
        </div>
      </div>
    );
  }
  return (
    <div className="searchPageVideoCard">
      <img
        className="thumbnail"
        src={image}
        alt="thumbnail"
        onClick={() => {
          handleClickVideo();
        }}
      />
      <div className="videoDetails">
        <div className="videoTitle" onClick={()=>{handleClickVideo();}}>{title}</div>
        <div className="VideoData" onClick={()=>{handleClickVideo();}}>100 views · 3 days ago</div>
        <div className="channelName">{channel}</div>
        <div className="videoDescription" onClick={()=>{handleClickVideo();}}>{description}</div>
      </div>
    </div>
  );
  function handleClickVideo(){
    navigate(`/watch?v=${id}`);
    setId(id);
    setTitle(title);
    setDescription(description);
    setShowMore(true);
  }
}

export default SearchPageVideoCard;
