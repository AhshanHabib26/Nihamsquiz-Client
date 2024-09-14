import Container from "@/utils/Container";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TopNavSlide } from "./TopNavSlide";

export const TopNavMenu = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const day = today.getDate();
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const year = today.getFullYear();
  const formattedDate = `${dayName}, ${month} ${day} ${year}`;

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between py-3">
          <TopNavSlide/>
          <div className=" hidden lg:block">
            <div className=" flex items-center gap-3">
              <div className=" flex items-center gap-1">
                <FaRegClock color="#D1D5DB" size={16} />
                <p className="hind-siliguri-light text-[16px] text-gray-300">
                  {formattedDate}
                </p>
              </div>
              <hr className=" border-[#D1D5DB] border h-[16px]" />
              <div className=" flex items-center">
                <Link to="/">
                  <FaFacebookF
                    className="text-gray-300 hover:text-[#FC4F4F] transition-colors duration-300"
                    size={16}
                  />
                </Link>
                <Link to="/">
                  {" "}
                  <FaLinkedinIn
                    className="text-gray-300 hover:text-[#FC4F4F] transition-colors duration-300 mx-2"
                    size={16}
                  />
                </Link>
                <Link to="/">
                  {" "}
                  <FaYoutube
                    className="text-gray-300 hover:text-[#FC4F4F] transition-colors duration-300"
                    size={16}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
