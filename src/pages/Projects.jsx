import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "GEMINI CLONE",
      description:
        "A Gemini clone with voice recognition, save chat to history, dark & light mode, and be able to prompt just like the real Gemini.",
      languages: "React, Tailwind CSS",
      sourceLink: "https://github.com/VannetNang/gemini-clone",
      demoLink: "https://gemini-clone-mu-three.vercel.app/",
    },
    {
      name: "Online Phone Store",
      description:
        "Users can browse a variety of mobile phones, view product details, add items to their shopping cart, and make purchases.",
      languages: "HTML, CSS, JavaScript",
      sourceLink: "https://github.com/VannetNang/phone-store",
      demoLink: "",
    },
    {
      name: "Chat Application",
      description:
        "A simple real-time chat app for instant messaging, where users can search friends, send image, sign-in and login account, and edit their profile.",
      languages: "React, Firebase, Tailwind CSS",
      sourceLink: "https://github.com/VannetNang/stay-chat-app",
      demoLink: "https://stay-chat-app.vercel.app/",
    },
  ];

  return (
    <>
      <div
        className="bg-dark-black pb-[13rem] pt-[11rem]"
        data-aos="fade-bottom"
        data-aos-anchor-placement="top-center"
      >
        <div className="heading-text-mobile text-purple text-center mb-[3rem] lg:mb-[66px] lg:heading-text">
          MY PROJECTS
        </div>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-[3rem] flex flex-col gap-[2rem] mx-[5rem]">
          {projects.map((project, index) => (
            <div key={index} className="bg-black flex-col px-[28px]">
              <div className="semi-heading-text-mobile lg:semi-heading-text text-purple py-[2rem]">
                {project.name}
              </div>
              <div className="text-grey-light regular-text-mobile lg:regular-text mb-[2rem]">
                {project.description}
              </div>
              <div className="text-grey-light regular-text-mobile lg:regular-text mb-[2rem]">
                {project.languages}
              </div>
              <div className="flex flex-col gap-[1.5rem] pb-[2rem]">
                <button className="bg-purple w-[150px] h-[35px] text-grey-light rounded-sm regular-text-mobile lg:regular-text lg:w-[242px] lg:h-[63px] cursor-pointer hover-light">
                  <a href={project.sourceLink} target="_blank">
                    Source Code
                  </a>
                </button>

                <button className="bg-grey-light w-[150px] h-[35px] text-black rounded-sm regular-text-mobile lg:regular-text lg:w-[242px] lg:h-[63px] cursor-pointer hover-dark">
                  <a href={project.demoLink} target="_blank">
                    View Project
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
