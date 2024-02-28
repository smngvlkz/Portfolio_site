import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeader";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDatabase } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiPython, DiReact } from "react-icons/di";
const personalDetails = [
  {
    label: "Name",
    value: "Simangaliso Vilakazi",
  },
  {
    label: "Age",
    value: "28",
  },
  {
    label: "Location",
    value: "KZN, RSA",
  },
  {
    label: "Email",
    value: "simangalisovilakazk1@icloud.com",
  },
  {
    label: "Contact No",
    value: "069-384-2857",
  },
];

const jobSummary =
  "Junior Full Stack Engineer with 10 years of experience in consultant and administration roles where I honed my skills in communication, problem-solving, and teamwork. A strong passion for learning and development made me a lifelong software developer, always seeking to learn and improve my skills. I take great pleasure in creating user-friendly and scalable products that solve real-world problems and add value to the users..";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsFillPersonFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="PersonalInfoHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDatabase size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiPython size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <SiTypescript size={60} color="var(--blue-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
