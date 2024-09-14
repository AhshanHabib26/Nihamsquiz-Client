import Container from "@/utils/Container";
import Styles from "../../../styles/HBanner.module.css";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
const HBanner = () => {
  return (
    <div className={`${Styles.HBannerContainer} py-20`}>
      <Container>
        <div className=" max-w-xl mx-auto">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
            <Input
              type="text"
              className="pl-10 h-[50px] py-2 border border-gray-300 rounded-md w-full"
              placeholder="এখানে কুইজ খুজুন..."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HBanner;
