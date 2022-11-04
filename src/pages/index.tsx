import React from "react";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <main className="main">{children}</main>
    </div>
  );
}

export default Layout;
