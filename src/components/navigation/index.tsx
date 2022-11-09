import Link from "next/link";
import React from "react";
import { navigation } from "../../data/navigation";
import ReorderIcon from "@mui/icons-material/Reorder";
import HomeIcon from '@mui/icons-material/Home';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AbcIcon from '@mui/icons-material/Abc';
type Props = {
  open?: boolean;
  setOpen?: any;
};

function Navigation({ open, setOpen }: Props) {
  return (
    <>
      <div className="navigation"></div>
      <div className="navigation-container">
        <div className="navigation-container__header">
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
        <ul className="navigation-container__list">
          {navigation.map((item:any, index:number) => {
            return (
              <Link
                className="navigation-container__item"
                key={index}
                href={item.link}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
