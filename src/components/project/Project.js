import { Section } from "../../styles/Section";
import { Button } from "../../styles/Button";
import {
  StyledProject,
  ProjectCard,
  ProjectCardImage,
  ProjectCardCTA,
  ProjectCardTitle,
} from "./Project.styled";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const projects = [
  {
    id: 1,
    img: IMG1,
    title: "Portfolio 1",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
  {
    id: 2,
    img: IMG2,
    title: "Portfolio 2",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
  {
    id: 3,
    img: IMG3,
    title: "Portfolio 3",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
  {
    id: 4,
    img: IMG4,
    title: "Portfolio 4",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
  {
    id: 5,
    img: IMG5,
    title: "Portfolio 5",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
  {
    id: 6,
    img: IMG6,
    title: "Portfolio 6",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
];
export default function Project() {
  return (
    <Section id="project">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>
      <StyledProject>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectCardImage>
              <img src={project.img} alt="Project" />
            </ProjectCardImage>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
            <ProjectCardCTA>
              <a href={project.github}>
                <Button>Github</Button>
              </a>
              <a href={project.dribbble}>
                <Button primary="true">Live Demo</Button>
              </a>
            </ProjectCardCTA>
          </ProjectCard>
        ))}
      </StyledProject>
    </Section>
  );
}
