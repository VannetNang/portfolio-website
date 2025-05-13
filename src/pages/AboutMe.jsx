import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const AboutMe = () => {
  return (
    <div
      className="bg-dark-black pb-[16rem] px-[1rem] pt-[10rem]"
      data-aos="fade-bottom"
      data-aos-anchor-placement="top-center"
    >
      <div className="heading-text-mobile text-purple lg:heading-text lg:mb-[76px] text-center">
        ABOUT ME
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-center lg:gap-[5rem]">
        <div className="m-[43px] flex-center">
          <img
            src={assets.user_icon}
            alt="User Icon"
            className="w-[252px] h-[256px] lg:w-[379px] lg:h-[420px]"
          />
        </div>

        <div className="text-grey-light regular-text-mobile px-[58px] leading-[162%] lg:leading-[178%] lg:regular-text lg:w-[920px]">
          My deep passion for technology has driven me to pursue a career in
          software development. This enthusiasm fuels my commitment to
          continuous learning and tackling new challenges that help me grow both
          personally and professionally. I am a responsible and dedicated
          individual, always eager to take on opportunities that push my skills
          further. I look forward to contributing my abilities and positive
          attitude to the success of the team and the organization.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
