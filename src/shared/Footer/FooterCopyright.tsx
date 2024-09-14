import { FaRegCopyright } from "react-icons/fa6";

const FooterCopyright = () => {
  const date = new Date();
  const fullYear: number = date.getFullYear();

 

  return (
    <div className="text-white flex items-center justify-center">
      <FaRegCopyright size={14} />
      <p className="text-md hind-siliguri-light ml-1">
        {fullYear} NihamsBD all rights reserved{" "}
        <a
          target="_blank"
          className="text-customSecondery"
          href="https://www.linkedin.com/in/ahshanhabib26/"
        >
          এহছান হাবিব
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;
