import { Section } from "../../styles/Section";
import {Button } from "../../styles/Button";
import { AiOutlineMail } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";

import {
  StyledContact,
  ContactOptions,
  ContactOption,
  ContactIcon,
  ContactForm,
} from "./Contact.styled";

const options = [
  {
    id: 1,
    type: "Email",
    describe: "nguyenviethoan2204@gmail.com",
    address: "mailto:nguyenviethoan2204@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    id: 2,
    type: "Zalo",
    describe: "0974443844",
    address: "https://zalo.me/0974443844",
    icon: <SiZalo />,
  },
  {
    id: 3,
    type: "Messenger",
    describe: "Nguyễn Viết Hoan",
    address: "https://m.me/Hoaan2204",
    icon: <FaFacebookMessenger />,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <StyledContact>
        <ContactOptions>
          {options.map((option) => (
            <ContactOption>
              <ContactIcon>{option.icon}</ContactIcon>
              <h4>{option.type}</h4>
              <h5>{option.describe}</h5>
              <a href={option.address}>Send a message</a>
            </ContactOption>
          ))}
        </ContactOptions>
        <ContactForm>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <Button primary="true" type="submit">Send Message</Button>
        </ContactForm>
      </StyledContact>
    </Section>
  );
}
