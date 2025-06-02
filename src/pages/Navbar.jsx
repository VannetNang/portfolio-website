import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isActive = (section) =>
    activeSection === section ? "text-purple" : "";

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (
          scrollY >= sectionTop - 100 &&
          scrollY < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black px-[1rem] py-[15px] md:px-[6rem] md:py-[30px] fixed w-full z-1">
      <div className="flex-between">
        <div>
          <a href="#">
            <img
              src={assets.user_icon}
              alt="Logo Icon"
              className="logo-rounded-mobile md:logo-rounded"
            />
          </a>
        </div>

        <div>
          <img
            src={assets.menu_icon}
            alt="Menu Icon"
            className="invert logo-rounded-mobile lg:hidden"
            onClick={() => setToggleMenu(true)}
          />
        </div>

        {toggleMenu && (
          <div className="absolute top-0 right-0 bg-black w-[100%] h-[25vh] p-5 md:p-10 md:h-[35vh]">
            <ul className="flex flex-col gap-[30px] text-grey-light regular-text-mobile cursor-pointer md:regular-text">
              <li
                onClick={() => setToggleMenu(false)}
                className={`hover-text ${isActive("about")}`}
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={() => setToggleMenu(false)}
                className={`hover-text ${isActive("skills")}`}
              >
                <a href="#skills">Skills</a>
              </li>
              <li
                onClick={() => setToggleMenu(false)}
                className={`hover-text ${isActive("projects")}`}
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                onClick={() => setToggleMenu(false)}
                className={`hover-text ${isActive("contact")}`}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <div
              className="absolute top-5 right-4 cursor-pointer hover:invert"
              onClick={() => setToggleMenu(false)}
            >
              <img src={assets.cross_icon} alt="Cross Icon" />
            </div>
          </div>
        )}

        <ul className="hidden lg:flex text-grey-light flex-center regular-text gap-[73px] cursor-pointer">
          <li className={`hover-text ${isActive("about")}`}>
            <a href="#about">About</a>
          </li>
          <li className={`hover-text ${isActive("skills")}`}>
            <a href="#skills">Skills</a>
          </li>
          <li className={`hover-text ${isActive("projects")}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`hover-text ${isActive("contact")}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
