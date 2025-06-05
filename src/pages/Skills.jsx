import React, { useState } from "react";
import { assets } from "../assets/assets";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const skills = [
    {
      icon: assets.framework_icon,
      name: "Core Languages",
      details: "HTML, CSS, JavaScript, Node.js",
      percent: "85%",
    },
    {
      icon: assets.frontend_icon,
      name: "Front-end",
      details: "React, Next.js, Tailwind CSS",
      percent: "90%",
    },
    {
      icon: assets.database_icon,
      name: "Back-end",
      details: "MongoDB, PostgreSQL, Express",
      percent: "75%",
    },
    {
      icon: assets.ux_ui_icon,
      name: "UX/UI Design",
      details: "Figma",
      percent: "80%",
    },
    {
      icon: assets.responsive_icon,
      name: "Responsive Design",
      details: "Mobile-first, Cross-browser",
      percent: "80%",
    },
  ];

  function handleSkillHover(index) {
    setIsHovered(index === isHovered ? false : index);
  }

  return (
    <>
      <div
        className="bg-dark-black px-[1.5rem] pb-[16rem] lg:px-[11.8rem] pt-[11rem]"
        data-aos="fade-bottom"
        data-aos-anchor-placement="top-center"
      >
        <div className="heading-text-mobile text-purple text-center mb-[40px] lg:mb-[60px] lg:heading-text">
          SKILLS
        </div>

        <div className="gap-[2rem]">
          {skills.map((skill, index) => (
            <div key={index} className="mb-[3rem] lg:flex gap-[3rem]">
              <div className="flex-center mb-[1rem] lg:mb-[-1.5rem]">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] invert"
                />
              </div>

              <div className="text-grey-light lg:w-full">
                <div
                  className="text-center cursor-pointer regular-text-mobile lg:regular-text"
                  onClick={() => handleSkillHover(index)}
                >
                  {index === isHovered ? skill.details : skill.name}
                </div>
                <div className="bg-black w-full rounded-sm mt-[8px]">
                  <div
                    className="bg-purple rounded-sm pl-[48%] regular-text-mobile lg:regular-text"
                    style={{ width: skill.percent }}
                  >
                    {skill.percent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
