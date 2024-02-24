import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import { MdWork } from "react-icons/md";
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--blue-theme-sub-text-color)",
                  border: "1.5px solid var(--blue-theme-main-color)",
                }}
                date="2023 - Present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#FFFFFF",
                  color: "var(--blue-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                </div>
                <h4 className="vertical-timeline-element-title-wrapper-header">
                  {item.subTitle}
                </h4>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__experience__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                lineColor="#808080"
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--blue-theme-sub-text-color)",
                  border: "1.5px solid var(--blue-theme-main-color)",
                }}
                date="2023 - Present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#FFFFFF",
                  color: "var(--blue-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                </div>
                <h4 className="vertical-timeline-element-title-wrapper-header">
                  {item.subTitle}
                </h4>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
