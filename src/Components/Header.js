import React, { useContext, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import logo from "./YouTube-Logo.wine.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useNavigate } from "react-router-dom";
import setContext from "../Context/Context";
import jwt_decode from "jwt-decode";
import { Button } from "@mui/material";

function Header() {
  const { menu, setMenu, input, setInput, setSearchInput, signIn, setSignIn } =
    useContext(setContext);

  function handleCallback(response) {
    console.log(response.credential);
    let object = jwt_decode(response.credential);
    console.log(object);
    setSignIn(object);
    document.getElementById("signIn").hidden = true;
  }

  useEffect(function () {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallback,
    });
    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "medium",
      width: "50px",
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-logo">
        <MenuIcon
          className="burgerMenu"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <img
          src={logo}
          alt="logo"
          className="headerLogo"
          onClick={() => {
            navigate("/");
          }}
        ></img>
      </div>
      <div className="search">
        <div className="input">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate(`/search/${input}`);
              setSearchInput(input);
            }}
          >
            <input
              placeholder="Search"
              type="text"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </form>
          <SearchIcon
            className="searchicon"
            onClick={() => {
              navigate(`/search/${input}`);
            }}
          />
        </div>
        <KeyboardVoiceIcon className="mic" />
      </div>
      <div className="headerIcons">
        <VideoCallOutlinedIcon className="header_icons" />
        <AppsIcon className="header_icons" />
        <NotificationsNoneOutlinedIcon className="header_icons" />

        <button className="sign-in" id="signIn"></button>
        {signIn !== null && (
          <Button
            variant="outlined"
            id="signOut"
            onClick={() => {
              setSignIn(null);
              document.getElementById("signIn").hidden = false;
            }}
          >
            Sign Out
          </Button>
        )}
        
      </div>
    </div>
  );
}

export default Header;
