import Link from "next/link";
import React from "react";
import { navigation } from "../../data/navigation";
import ReorderIcon from "@mui/icons-material/Reorder";

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
