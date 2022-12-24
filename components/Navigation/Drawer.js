import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ExpandMenu from "./ExpandMenu";
import logo from "./logo.png";

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  if (!routes) {
    return null;
  }
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <Img src={logo} alt="" />
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} toggle={toggleDrawer}/>;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  href={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <Link href="contacto">
            <LoginButton to="contacto" onClick={toggleDrawer}>
              CONTACTO
            </LoginButton>
          </Link>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;

const Img = styled.img`
  width: 70px;
`;
const SNavbarBrand = styled.h2`
  font-size: 2rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgb(248, 249, 250);
  transition: 0.3s ease;
  -webkit-box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 0.75);
  transform: translateX(${(props) => (props.isOpen ? "0" : "-110%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 4vw;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  height: 6vh;
  width: 100%;
  background-color: #0094dc;
  border: 1px solid rgb(248, 249, 250);
  border-radius: 1rem;
  transition: 0.3s ease;
  color: rgb(248, 249, 250);
  font-size: 5vw;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: #21b2a5;
    box-shadow: 0px 0px 10px #21b2a5;
  }
`;
