import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className="text-center bg-dark-black flex flex-col pb-[16rem] pt-[110px]">
        <div className="heading-text-mobile text-grey-light m-[37px] lg:heading-text lg:mt-[108px] lg:mb-[41px]">
          HI, I'M
        </div>

        <div className="heading-text-mobile text-purple mb-[37px] lg:heading-text lg:mb-[66px]">
          NANG VANNET
        </div>

        <div className="regular-text-mobile text-grey-light leading-[162%] mb-[37px] px-[58px] lg:px-[309px] lg:regular-text lg:mb-[104px]">
          I’m a software developer, graduated at American University of Phnom
          Penh. My goal is to bring ideas to technology life and improve human’s
          experience toward their life.
        </div>

        <div className="lg:flex-center gap-[174px]">
          <div className="mb-[37px]">
            <button className="bg-purple regular-text-mobile text-grey-light w-[149px] h-[46px] rounded-md lg:w-[238px] lg:h-[89px] lg:regular-text hover-light">
              <a href="#contact">Contact Me</a>
            </button>
          </div>

          <div className="mb-[37px]">
            <button className="bg-black regular-text-mobile text-grey-light w-[149px] h-[46px] rounded-md lg:w-[238px] lg:h-[89px] lg:regular-text hover-dark">
              <a href="#projects">View Projects</a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
