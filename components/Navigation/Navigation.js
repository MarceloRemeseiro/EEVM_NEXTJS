import React, { useState } from "react";
import Navbar from "./Navbar";
import { routes } from "./constant";
import Drawer from "./Drawer";

const Navigation = () => {
 
  const [isOpen , setIsOpen] = useState(false);
  if (!routes || isOpen === undefined) {
    return null;
  }

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
