import { MdOutlineEmail } from "react-icons/md";

export const TopNavSlide = () => {
  return (
    <div>
      <div className=" flex items-center gap-1 text-gray-300 hover:text-gray-50">
        <MdOutlineEmail size={18} />
        <a
          href="mailto:ahshan.habib026@gmail.com"
          className="hind-siliguri-light text-[16px]"
        >
          ahshan.habib026@gmail.com
        </a>
      </div>
    </div>
  );
};
