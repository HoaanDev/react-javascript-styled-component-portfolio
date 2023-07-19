import styled from "styled-components";

export const StyledProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
export const ProjectCard = styled.article`
  background: ${({ theme }) => theme.colors.bgVariant};
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryVariant};
    background: transparent;
  }
`;
export const ProjectCardImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;
export const ProjectCardTitle = styled.h3`
  margin: 1.2rem 0 2rem;
`;
export const ProjectCardCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
