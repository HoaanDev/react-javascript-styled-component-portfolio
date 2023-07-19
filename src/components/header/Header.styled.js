import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    height: 68vh;
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    height: 100vh;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const Name = styled.h1``;

export const Career = styled.h5`
  color: ${({ theme, textlight }) => (textlight ? theme.colors.light : "")};
`;

export const ScrollDown = styled.a`
  position: absolute;
  right: -2rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: none;
  }
`;

export const MyImage = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    transparent
  );
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`;
