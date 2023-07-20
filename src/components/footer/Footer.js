import {
  StyledFooter,
  FooterLogo,
  FooterSocials,
  FooterCopyright,
} from "./Footer.styled";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLogo href="#">Hoaan Nguyen</FooterLogo>

      <FooterSocials>
        <a href="https://facebook.com/Hoaan2204">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/hoaan2204">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; Hoaan Nguyen. All rights reserved.</small>
      </FooterCopyright>
    </StyledFooter>
  );
}
