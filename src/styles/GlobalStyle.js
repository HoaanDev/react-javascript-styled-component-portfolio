import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.7;
    background: ${({ theme }) => theme.colors.bg};
    background-image: url(../src/assets/bg-texture.png);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

`;

export default GlobalStyle;
