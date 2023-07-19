import { FaAward, FaUsers, FaBook } from "react-icons/fa";

import { Button } from "../../styles/Button";
import { Section } from "../../styles/Section";
import {
  StyledAbout,
  AboutMe,
  AboutMeImg,
  AboutContent,
  AboutCardList,
  AboutCard,
  AboutIcon,
} from "./About.styled";

import ME from "../../assets/me-about.jpg";

export default function About() {
  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <StyledAbout>
        <AboutMe>
          <AboutMeImg>
            <img src={ME} alt="About Me Image" />
          </AboutMeImg>
        </AboutMe>
        <AboutContent>
          <AboutCardList>
            <AboutCard>
              <AboutIcon>
                <FaAward />
              </AboutIcon>
              <h5>Experiences</h5>
              <small>3+ Years Studying</small>
            </AboutCard>
            <AboutCard>
              <AboutIcon>
                <FaUsers />
              </AboutIcon>
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </AboutCard>
            <AboutCard>
              <AboutIcon>
                <FaBook />
              </AboutIcon>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </AboutCard>
          </AboutCardList>

          <p>
            I am a web developer based in New York. I love to learn new things
            in- ways to. Lorem ipsum dolor sit amet, consectetur adip inc
          </p>

          <a href="#contact">
            <Button primary="true">Contact Me</Button>
          </a>
        </AboutContent>
      </StyledAbout>
    </Section>
  );
}
