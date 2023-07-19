import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Container } from "./styles/Container";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Navbar />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
