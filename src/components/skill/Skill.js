import { Section } from "../../styles/Section";

import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaLaravel,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  StyledSkill,
  FrontendSkill,
  BackendSkill,
  SkillIcon,
  SkillContent,
  DetailContent,
} from "./Skill.styled";

const frontendSkills = [
  {
    name: "HTML",
    level: "Intermediate",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    level: "Intermediate",
    icon: <FaCss3 />,
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    icon: <FaBootstrap />,
  },
  {
    name: "Javascript",
    level: "Intermediate",
    icon: <FaJsSquare />,
  },
  {
    name: "ReactJS",
    level: "Basic",
    icon: <FaReact />,
  },
];

const backendSkills = [
  {
    name: "PHP",
    level: "Intermediate",
    icon: <FaPhp />,
  },
  {
    name: "Laravel",
    level: "Intermediate",
    icon: <FaLaravel />,
  },
  {
    name: "Java",
    level: "Intermediate",
    icon: <FaJava />,
  },
  {
    name: "NodeJS",
    level: "Intermediate",
    icon: <FaNodeJs />,
  },
];

export default function Skill() {
  return (
    <Section id="skill">
      <h5>What Skills I Have</h5>
      <h2>MY SKILLS</h2>

      <StyledSkill>
        <FrontendSkill>
          <h3>Frontend Development</h3>
          <SkillContent>
            {frontendSkills.map((frontendSkill, index) => (
              <DetailContent key={index}>
                <SkillIcon>{frontendSkill.icon}</SkillIcon>
                <div>
                  <h4>{frontendSkill.name}</h4>
                  <small>{frontendSkill.level}</small>
                </div>
              </DetailContent>
            ))}
          </SkillContent>
        </FrontendSkill>
        <BackendSkill>
          <h3>Backend Development</h3>
          <SkillContent>
            {backendSkills.map((backendSkill, index) => (
              <DetailContent key={index}>
                <SkillIcon>{backendSkill.icon}</SkillIcon>
                <div>
                  <h4>{backendSkill.name}</h4>
                  <small>{backendSkill.level}</small>
                </div>
              </DetailContent>
            ))}
          </SkillContent>
        </BackendSkill>
      </StyledSkill>
    </Section>
  );
}
