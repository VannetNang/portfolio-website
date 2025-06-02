import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/vannetnang/",
    },
    {
      icon: "fa-brands fa-github",
      link: "https://github.com/VannetNang",
    },
    {
      icon: "fa-brands fa-facebook",
      link: "https://www.facebook.com/vannet.nang.73",
    },
    {
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/___stay.cool____/",
    },
  ];

  return (
    <>
      <footer className="bg-black lg:flex-between lg:px-[122px] pt-[2rem] lg:pt-0">
        <div className="text-[14px] font-medium lg:text-[20px] text-center text-purple">
          <i className="fa-solid fa-copyright"></i> 2025 Vannet Nang. All rights
          reserved.
        </div>

        <div className="flex-center mt-[2rem] pb-[2rem]">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-light text-[22px] lg:text-[30px] mx-[1rem]"
            >
              <i className={social.icon} style={{ color: "#8685ef" }}></i>
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
