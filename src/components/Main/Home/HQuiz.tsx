import { DashboardLoader } from "@/loader/DashboardLoader";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import Container from "@/utils/Container";
import HQuizCard from "./HquizCard";
import { TQuiz } from "@/types/common.data";

const HQuiz = () => {
  const { data, isFetching } = useGetAllQuizQuery({});

  if (isFetching) {
    return (
      <div>
        <DashboardLoader />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Container>
        <h1 className="text-center mb-5 text-2xl hind-siliguri-semibold text-customPrimary">
          Quiz Vault
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {data?.data?.map((quiz: TQuiz) => (
            <HQuizCard quiz={quiz} key={quiz._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HQuiz;
