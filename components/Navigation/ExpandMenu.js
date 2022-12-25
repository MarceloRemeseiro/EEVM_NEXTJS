import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const ExpandMenu = ({ route ,toggle}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? "*" : "-"}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute) => (
          <SubRoute
            onClick={toggle}
            href={subRoute.link}
            key={subRoute.name}
          >
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default ExpandMenu;

const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  
`;
const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 4vw;
  color: #0a0a0a;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: #0a0a0a;
  padding: 0.7rem;
  font-size: 4vw;
`;
