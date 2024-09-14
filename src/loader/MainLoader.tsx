import SpinnerImg from "../assets/icons/spinner.gif";
const MainLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <img className="w-[400px]" src={SpinnerImg} alt="" />
    </div>
  );
};

export default MainLoader;
