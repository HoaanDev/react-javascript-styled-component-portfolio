import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

import { StyledHeaderSocials } from "./HeaderSocials.styled";

export default function HeaderSocials() {
  return (
    <StyledHeaderSocials>
      <a href="https://www.linkedin.com/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://www.github.com/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/Hoaan2204/" target="_blank">
        <FaFacebook />
      </a>
    </StyledHeaderSocials>
  );
}
