import styled from "styled-components";

export const StyledHeaderSocials = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: none;
  }
`;
