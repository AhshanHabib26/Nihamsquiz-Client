
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import Container from "@/utils/Container";
import { TQuiz } from "@/types/common.data";
import HQuizCard from "./HQuizCard";
import CloudImg from "../../../assets/icons/cloud.gif";
import MainLoader from "@/loader/MainLoader";

const HQuiz = () => {
  const { data, isFetching } = useGetAllQuizQuery({});

  if (isFetching) {
    return (
      <div>
        <MainLoader />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Container>
        <h1 className="text-center mb-5 text-2xl hind-siliguri-semibold text-customPrimary">
          Quiz Vault
        </h1>
        {data?.data && data.data.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {data.data.map((quiz: TQuiz) => (
              <HQuizCard quiz={quiz} key={quiz._id} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img className="w-[150px]" src={CloudImg} alt="" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default HQuiz;
