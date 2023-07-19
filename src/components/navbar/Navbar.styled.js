import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  width: max-content;
  padding: 0.7rem 1.7rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  display: flex;
  gap: 0.8rem;
  z-index: 2;
`;

export const NavButton = styled.a`
  font-size: 1.1rem;
  padding: 0.9rem;
  color: ${({ theme, active }) => active === "true" ? theme.colors.white : theme.colors.light};
  background: ${({ theme, active }) => active === "true" ? theme.colors.bg : "transparent"};;
  border-radius: 50%;
  display: flex;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
