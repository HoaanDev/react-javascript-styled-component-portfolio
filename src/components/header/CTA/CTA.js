import { StyledCTA } from "./CTA.styled";
import { Button } from "../../../styles/Button";

import CV from "../../../assets/cv.pdf";

export default function CTA() {
  return (
    <StyledCTA>
      <a href={CV} download>
        <Button>Download CV</Button>
      </a>
      <a href="#contact">
        <Button primary="true">Let's Talk</Button>
      </a>
    </StyledCTA>
  );
}
