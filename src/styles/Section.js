import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  margin-top: 8rem;

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    margin-top: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    margin-bottom: 2rem;
  }

  h2,
  h5 {
    text-align: center;
    color: ${({ theme }) => theme.colors.light};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 3rem;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
      margin-bottom: 2rem;
    }
  }
`;
