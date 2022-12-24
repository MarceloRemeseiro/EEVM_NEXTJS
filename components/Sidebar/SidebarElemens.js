import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
//--primary: #2b74fd;
//--secondary: #8D9297;
//--light: #F8F9FA;
//--dark: #182333;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #F8F9FA;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #8D9297;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  padding-left: 0;
  margin-left: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarMenuDrop = styled.ul`
  display: grid;
  padding-left: 0;
  margin-left: 0;
  text-align: center;
  justify-content: center;
 
  

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarDrop = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #8D9297;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #2b74fd;
    transition: 0.2s ease-in-out;
  }
  

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;


export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #8D9297;
  cursor: pointer;

  &:hover {
    color: #2b74fd;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarDropMenu = styled.ul`
  
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
 border-radius: 50px;
  background: #2b74fd;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    -webkit-box-shadow: 0px 0px 56px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 56px -3px rgba(0,0,0,0.75);
box-shadow: 0px 0px 56px -3px rgba(0,0,0,0.75);
    color: #010606;
  }
`;
