import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Menu from "./Menu";
import logo from "./logo.png";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>||||</DrawerButton>

        <Link href="/">
          <Img src={logo} alt="" />
        </Link>

        <RightNav>
          <NavRoutes>
            {routes.map(route => {
              if (route.subRoutes) {
                return (
                  <Menu
                    route={route}
                    key={route.name}
                    onClick={toggleDrawer}
                  />
                );
              }
              return (
                <NavRoute key={route.name} href={route.link}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </RightNav>
        <Link href="/contacto">
          <LoginButton>CONTACTO</LoginButton>
        </Link>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const Img = styled.img`
  width: 70px;
  @media (max-width: 860px) {
    display: none;
  }
`;

const DrawerButton = styled.button`
  all: unset;
  font-size: 2rem;
  display: grid;
  @media (min-width: 860px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: rgb(248, 249, 250);
  margin: 0 auto;
  position: sticky;
  z-index: 100;
  margin-bottom: 0;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8d9297;
  cursor: default;
`;

const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 860px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
  white-space: nowrap;
  align-items: center;
  @media (max-width: 1040px) {
    font-size: 1rem;
  }
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: #8d9297;
  padding: 0.8rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: #0a0a0a;
    background-color: #0094dc;
    border-radius: 12px;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem;
  width: 12rem;
  background-color: #0094dc;
  border: 1px solid rgb(248, 249, 250);
  border-radius: 1rem;
  transition: 0.3s ease;
  color: rgb(248, 249, 250);
  font-size: 1.4rem;

  @media (max-width: 1040px) {
    font-size: 1rem;
    width: 8rem;
  }
  @media (max-width: 860px) {
    display: none;
  }

  &:hover {
    cursor: default;
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: #21b2a5;
    box-shadow: 0px 0px 10px #21b2a5;
  }
`;
