import styled from "styled-components";

export const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
`;

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    ${({ theme }) => theme.colors.primary},
    transparent
  );
  display: grid;
  place-items: center;

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

export const AboutMeImg = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: rotate(0deg);
  }
`;

export const AboutContent = styled.div`
  p {
    margin: 2rem 0 2.6rem;
    color: ${({ theme }) => theme.colors.light};

    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
      margin: 1rem 0 1.5rem;
    }
    
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    margin: 1.5rem 0;
  }
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    text-align: center;
  }
`;

export const AboutCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const AboutCard = styled.div`
  background: ${({ theme }) => theme.colors.bgVariant};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryVariant};
    background: transparent;
    cursor: default;
  }

  h5 {
    font-size: 0.95rem;
  }

  small {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const AboutIcon = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
