import "./App.css";
import SocialsMedias from "./Socials";
import { BtonContact } from "./Header";

function InputsFields({ text }) {
  return (
    <label>
      <input
        type="text"
        className="text-white body-1 w-full h-16 bg-[var(--black-300)] pl-8 border-b-4 border-indigo-600"
        placeholder={text}
      />
    </label>
  );
}
const Footer = () => {
  return (
    <>
      <div className="bg-[var(--black-100)] opacity-80 pt-20">
        <div className="relative md:px-24 lg:flex justify-between px-2 border-b-4 border-indigo-600">
          <div className="px-2 md:lg:p-0 text-start basis-5/12">
            <p className="text-h2 mb-3 lg:mb-20 text-7xl ">Contact</p>
            <p className="body-normal">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="px-2 py-16 flex flex-col gap-8 border-indigo-600 lg:p-0 basis-6/12 mb-24">
            <InputsFields text="NAME" />
            <InputsFields text="EMAIL" />
            <label>
              <textarea
                className="text-white body-1 w-full bg-[var(--black-300)] pl-8 pt-4 border-b-4 border-indigo-600"
                placeholder="MESSAGE"
                rows="5"
              ></textarea>
            </label>
            <div className="text-end">
              <BtonContact text="SEND MESSAGE" />
            </div>
          </div>
          <img
            src="/icons/ovals.svg"
            alt=""
            className="absolute -left-1/2 bottom-1/4 md:bottom-7"
          />
        </div>
      </div>
      <div className="bg-[var(--black-100)] opacity-80">
        <SocialsMedias />
      </div>
    </>
  );
};
export default Footer;
