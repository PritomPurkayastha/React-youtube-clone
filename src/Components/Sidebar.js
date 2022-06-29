import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { useContext } from "react";
import setContext from "../Context/Context";

export default function Sidebar() {
  const{menu}=useContext(setContext);
  if (menu === false) {
    return (
      <div className="sidebar">
        <SidebarRow Icon={HomeIcon} title="Home" navigateTo="/"/>
        <SidebarRow Icon={ExploreOutlinedIcon} title="Explore" navigateTo="/feed/explore"/>
        <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subcriptions" />
        <hr />
        <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
        <SidebarRow Icon={HistoryOutlinedIcon} title="History" />
        <SidebarRow Icon={OndemandVideoOutlinedIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos" />
        <SidebarRow Icon={KeyboardArrowDownOutlinedIcon} title="Show more" />
        <hr />
        <div className="message">MORE FROM YOUTUBE</div>
        <SidebarRow Icon={YouTubeIcon} title="Youtube Premium" />
        <SidebarRow Icon={TheatersOutlinedIcon} title="Films" />
        <SidebarRow Icon={SportsEsportsOutlinedIcon} title="Gaming" />
        <SidebarRow Icon={PodcastsIcon} title="Live" />
        <SidebarRow Icon={DryCleaningOutlinedIcon} title="Fashion & beauty" />
        <SidebarRow Icon={LightbulbOutlinedIcon} title="Learning" />
        <SidebarRow Icon={EmojiEventsOutlinedIcon} title="Sports" />
        <hr></hr>
        <SidebarRow Icon={SettingsOutlinedIcon} title="Settings" />
        <SidebarRow Icon={OutlinedFlagIcon} title="Report history" />
        <SidebarRow Icon={HelpOutlineOutlinedIcon} title="Help" />
        <SidebarRow Icon={FeedbackOutlinedIcon} title="Send feedback" />
        <hr />
        <div className="footerSection">
          <div className="footerSectionTop">
            <button className="footer">About</button>
            <button className="footer">Press</button>
            <button className="footer">Copyright</button>
            <button className="footer">Contact us</button>
            <button className="footer">Creator</button>
            <button className="footer">Advertise</button>
            <button className="footer">Developers</button>
          </div>
          <div className="footerSectionBottom">
            <button className="footer">Terms</button>
            <button className="footer">Privacy</button>
            <button className="footer">Policy & safety</button>
            <button className="footer">How Youtube works</button>
            <button className="footer">Test new festures</button>
          </div>
          <div className="copyright">
            <CopyrightOutlinedIcon className="copyrightIcon"/>
            <span className="copyrightText">2022 Google LLC</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar">
        <SidebarRow Icon={HomeIcon} title="" />
        <SidebarRow Icon={ExploreOutlinedIcon} title="" />
        <SidebarRow Icon={SubscriptionsOutlinedIcon} title="" />
        <SidebarRow Icon={VideoLibraryOutlinedIcon} title="" />
      </div>
    );
  }
}
