import Link from "next/link";
import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navigation from "../../components/navigation";

type Props = {};

function Header({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      {
        open && <Navigation open={open} setOpen={setOpen}/>
      }
      <div className="header-left">
        <button className="header-icon" onClick={() => setOpen(!open)}>
          <ReorderIcon className="icon" />
        </button>
        <Link className="header-link" href="/">
          <img
            className="header-logo"
            src="./icons/Youtube-Logo.wine.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-center">
        <div className="header-search">
          <input className="header-search__input" placeholder="Tìm kiếm" />
          <button className="header-search__btn">
            <SearchIcon className="icon" />
          </button>
        </div>
        <button className="header-micro">
          <MicIcon className="icon" />
        </button>
      </div>
      <div className="header-right">
        <button className="header-right__btn">
          <VideoCallIcon className="icon" />
        </button>
        <button className="header-right__btn">
          <NotificationsNoneIcon className="icon" />
        </button>
        <div className="header-right__user">
          <img src="./icons/dark-map.jpeg" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
