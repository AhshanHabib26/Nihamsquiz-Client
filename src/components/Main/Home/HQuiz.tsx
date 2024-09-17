import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import Container from "@/utils/Container";
import { TCategory, TQuiz } from "@/types/common.data";
import HQuizCard from "./HQuizCard";
import CloudImg from "../../../assets/icons/cloud.gif";
import MainLoader from "@/loader/MainLoader";
import HCategoryCard from "./HCategoryCard";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useState } from "react";
import { PaginationCard } from "@/components/Dashboard/PaginationCard";


const HQuiz = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const { data: quizData, isFetching } = useGetAllQuizQuery({ page, limit });
  const { data: categoryData } = useGetAllCategoriesQuery({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const total = quizData?.meta?.total ?? 0;

  const filteredQuizzes = quizData?.data?.filter((quiz: TQuiz) =>
    selectedCategory ? quiz?.category?.name === selectedCategory : true
  );

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
        <div>
          {categoryData?.data && categoryData.data.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
              {categoryData?.data?.map((category: TCategory) => (
                <HCategoryCard
                  category={category}
                  key={category._id}
                  setSelectedCategory={setSelectedCategory}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-14">
          {filteredQuizzes && filteredQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {filteredQuizzes.map((quiz: TQuiz) => (
                <HQuizCard quiz={quiz} key={quiz._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <img className="w-[150px]" src={CloudImg} alt="" />
            </div>
          )}
        </div>
        <div className="flex items-end justify-end max-w-4xl mx-auto mt-5">
          {filteredQuizzes && filteredQuizzes.length > 0 && (
            <PaginationCard
              page={page}
              limit={limit}
              total={total}
              onPageChange={(newPage) => setPage(newPage)}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default HQuiz;
