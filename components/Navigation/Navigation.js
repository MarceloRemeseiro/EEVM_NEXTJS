import React, { useState } from "react";
import Navbar from "./Navbar";
import { routes } from "./constant";
import Drawer from "./Drawer";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (!routes) {
    return null;
  }

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
