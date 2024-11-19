import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import ProtectedRouteProvider from "../../lib/ProtectedRouteProvider";
import { useSideBarState } from "../../zustand/SideBarState";

const Layout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { openSideBar, setOpenSideBar } = useSideBarState();

  return (
    <ProtectedRouteProvider className="Layout">
      <main
        className={`${className} ${openSideBar ? "Layout_Body" : "Layout_Body side_bar_close"}`}
      >
        <NavBar isOpen={openSideBar} />
        <div className="Layout_Children">{children}</div>
      </main>
      <SideBar isOpen={openSideBar} setIsOpen={setOpenSideBar} />
    </ProtectedRouteProvider>
  );
};

export default Layout;
