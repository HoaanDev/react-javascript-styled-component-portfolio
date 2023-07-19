import { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";

import { StyledNavbar, NavButton } from "./Navbar.styled";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <StyledNavbar>
      <NavButton
        href="#"
        active={activeNav === "#" ? "true" : "false"}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </NavButton>
      <NavButton
        href="#about"
        active={activeNav === "#about" ? "true" : "false"}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </NavButton>
      <NavButton
        href="#skill"
        active={activeNav === "#skill" ? "true" : "false"}
        onClick={() => setActiveNav("#skill")}
      >
        <AiOutlineTool />
      </NavButton>
      <NavButton
        href="#project"
        active={activeNav === "#project" ? "true" : "false"}
        onClick={() => setActiveNav("#project")}
      >
        <AiOutlineProject />
      </NavButton>
      <NavButton
        href="#contact"
        active={activeNav === "#contact" ? "true" : "false"}
        onClick={() => setActiveNav("#contact")}
      >
        <AiOutlineContacts />
      </NavButton>
    </StyledNavbar>
  );
}
