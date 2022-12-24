import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenuDrop,
  SidebarDrop,
  SidebarDropMenu,
} from "./SidebarElemens";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/" onClick={toggle}>
            INICIO
          </SidebarLink>
          <SidebarLink href="actividad" onClick={toggle}>
            ACTIVIDADES
          </SidebarLink>
          <SidebarLink href="media" onClick={toggle}>
            MEDIA
          </SidebarLink>
          <SidebarMenuDrop>
            <SidebarDrop
              to="#"
              class="dropdown-toggle text-secondary"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ↓ SOBRE NOSOTROS ↓
            </SidebarDrop>
            <ul class="dropdown-menu dropM" aria-labelledby="dropdownMenu2">
              <li>
                <SidebarLink
                  to="misionVision"
                  class="dropdown-item"
                  type="button"
                  onClick={toggle}
                >
                  Misión y Visión
                </SidebarLink>
              </li>
              <li>
                <SidebarLink
                  to="queCreemos"
                  class="dropdown-item"
                  type="button"
                  onClick={toggle}
                >
                  Que creemos
                </SidebarLink>
              </li>
              <li>
                <SidebarLink
                  to="evangelio"
                  onClick={toggle}
                  class="dropdown-item"
                  type="button"
                >
                  EL Evangelio
                </SidebarLink>
              </li>
              <li>
                <SidebarLink
                  to="pastores"
                  onClick={toggle}
                  class="dropdown-item"
                  type="button"
                >
                  Pastores
                </SidebarLink>
              </li>
            </ul>
          </SidebarMenuDrop>
          <SidebarLink href="dar" onClick={toggle}>
            DONAR
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="contacto" onClick={toggle}>
            CONTACTO
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
