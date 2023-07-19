import styled from "styled-components";

export const Container = styled.div`
  width: ${({ theme }) => theme.container.lg};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    width: ${({ theme }) => theme.container.md};
  }

  @media (min-width: ${({ theme }) => theme.devices.mobile}) {
    width: ${({ theme }) => theme.container.sm};
  }
`;
