import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Menu = ({ route }) => {
 
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute href={subRoute.link} key={subRoute.name}>
            {subRoute.name} 
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 17rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 100;
  background-color: rgb(248, 249, 250);
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  &:hover {
    transition: 0.5s ease;
    color: #8d9297;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: #8d9297;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;

  &:hover {
    transition: 0.3s ease-in;
    color: #0a0a0a;
    background-color: #0094dc;
  }
`;
