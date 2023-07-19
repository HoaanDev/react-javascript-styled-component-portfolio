import HeaderSocials from "./HeaderSocials/HeaderSocials";

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
        <Name>Hoan Nguyen</Name>
        <Career $textlight>Fullstack Developer</Career>
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
