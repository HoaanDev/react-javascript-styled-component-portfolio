import styled from "styled-components";

export const StyledContact = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
  margin: 0 auto;

  @media (max-width: ${({theme}) => theme.devices.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: ${({theme}) => theme.devices.mobile}) {
    width: ${({theme}) => theme.container.sm};
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactOption = styled.article`
  background: ${({ theme }) => theme.colors.bgVariant};
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

export const ContactIcon = styled.i`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  label {
    font-size: 1.2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primaryVariant};
    resize: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
