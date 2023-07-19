import styled from "styled-components";

export const StyledSkill = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  > div {
    background: ${({ theme }) => theme.colors.bgVariant};
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${({ theme }) => theme.transition};

    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
      width: 100%;
      padding: 2rem 1rem;
    }
    &:hover {
      background: transparent;
      border-color: ${({ theme }) => theme.colors.primaryVariant};
      cursor: default;
    }

    small {
      color: ${({ theme }) => theme.colors.light};
    }
  }
  > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    gap: 1rem;
  }
`;
export const FrontendSkill = styled.div``;
export const BackendSkill = styled.div``;
export const SkillIcon = styled.i`
  font-size: 3rem;
  margin-top: -6px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SkillContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  @media (max-width: ${({ theme }) => theme.devices.tablet}) {
    padding: 1rem;
  }
`;
export const DetailContent = styled.article`
  display: flex;
  gap: 1rem;
`;
