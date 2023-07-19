import styled from "styled-components"

export const Button = styled.button`
  width: max-content;
  display: inline-block;
  color: ${({theme, primary}) => primary ? theme.colors.bg : theme.colors.primary};
  background: ${({theme, primary}) => primary ? theme.colors.primary : "none"};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors.primary};
  transition: ${({theme}) => theme.transition};

  &:hover {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.bg};
    border-color: transparent;
  }
`;