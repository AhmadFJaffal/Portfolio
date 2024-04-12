import React from "react";
import "./SkillsInfoCard.css";
import { SKILLS } from "../../../utils/data";

const SkillsInfoCard = ({ heading }) => {
  const skillSet = SKILLS.find((set) => set.title === heading);

  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skillSet &&
          skillSet.skills.map((skill, index) => (
            <div className="skill-info" key={index}>
              <img src={skill.img} alt={skill.skill} />
              <p>{skill.skill}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
