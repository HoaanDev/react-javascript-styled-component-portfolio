import HeaderSocials from "./HeaderSocials/HeaderSocials";
import Typewriter from "typewriter-effect";

import {
  StyledHeader,
  HeaderContainer,
  Name,
  Career,
  MyImage,
  ScrollDown,
} from "./Header.styled";

import CTA from "./CTA/CTA";
import ME from "../../assets/me.png";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <h5>Hello I'm</h5>
        <Name>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hoaan Nguyen.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Fullstack Web Developer.")
                .pauseFor(1000)
                .start();
            }}
          />
        </Name>
        <CTA />
        <HeaderSocials />

        <MyImage>
          <img src={ME} alt="me" />
        </MyImage>

        <ScrollDown href="#contact">Scroll Down</ScrollDown>
      </HeaderContainer>
    </StyledHeader>
  );
}
