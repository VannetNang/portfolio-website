import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const contacts = [
    {
      icon: "fa-solid fa-phone",
      name: "Phone Number",
      contactIcon: assets.ux_ui_icon,
      contactDetail: "(+855) 12 212 238",
    },
    {
      icon: "fa-solid fa-envelope",
      name: "Email Address",
      contactIcon: assets.ux_ui_icon,
      contactDetail: "NangVannet59@gmail.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      name: "Location",
      contactIcon: assets.ux_ui_icon,
      contactDetail: "Phnom Penh, Cambodia",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully! Thank you❤️");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong! Please try again🙏");
        }
      );
  };

  return (
    <>
      <div
        className="pt-[11rem] bg-dark-black pb-[9rem]"
        data-aos="fade-bottom"
        data-aos-anchor-placement="top-center"
        data-aos-duration="800"
      >
        <div className="heading-text-mobile lg:heading-text text-center text-purple mb-[40px] lg:mb-[60px]">
          CONTACT ME
        </div>

        <div className="lg:flex-center xl:gap-[6rem]">
          <div className="flex flex-col gap-[2rem] mx-[2rem] mb-[52px] lg:gap-[3rem]">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-[1.5rem]">
                <div>
                  <i
                    className={`${contact.icon} text-2xl`}
                    style={{ color: "#8685ef" }}
                  ></i>
                </div>

                <div className="text-grey-light regular-text-mobile lg:regular-text">
                  {contact.contactDetail}
                </div>
              </div>
            ))}
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[2rem] mx-[2rem] lg:w-[616px]"
          >
            <div>
              <label
                htmlFor="name"
                className="absolute text-xs lg:text-sm tracking-[0.2em] pl-[0.5em]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-grey-light w-full rounded-sm h-[45px] lg:h-[70px] pl-[0.5em] pt-[0.6em] text-[14px] lg:text-[20px]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="absolute text-xs lg:text-sm tracking-[0.2em] pl-[0.5em]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-grey-light w-full rounded-sm h-[45px] lg:h-[70px] pl-[0.5em] pt-[0.6em] text-[14px] lg:text-[20px]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="absolute text-xs lg:text-sm tracking-[0.2em] pl-[0.5em]"
              >
                Messages
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-grey-light w-full rounded-sm h-[104px] pl-[0.5em] pt-[1.3em] text-[14px] lg:text-[20px] lg:h-[170px]"
                required
              />
            </div>

            <div className="flex-center lg:justify-start">
              <button
                type="submit"
                className="regular-text-mobile lg:regular-text bg-purple text-grey-light rounded-sm w-[177px] h-[38px] cursor-pointer lg:w-[222px] lg:h-[70px] hover-light"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
