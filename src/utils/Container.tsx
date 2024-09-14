import { TContainerProps } from "@/types";

const Container = ({ children }: TContainerProps) => {
  return <div className="w-full max-w-[1320px] px-3 mx-auto">{children}</div>;
};

export default Container;
