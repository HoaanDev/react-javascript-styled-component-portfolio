import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;
  a {
    color: ${({ theme }) => theme.colors.bg};
  }
`;
export const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    margin-bottom: 2.6rem;
  }
  a {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.bg};
      border-color: ${({ theme }) => theme.colors.bg};
    }
  }
`;
export const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.bg};
`;
