import { DashboardLoader } from "@/loader/DashboardLoader";
import { useGetSubmissionQuizQuery } from "@/redux/features/quiz/quizApi";
import Container from "@/utils/Container";
import { useParams } from "react-router-dom";

// Define TypeScript interfaces
interface Answer {
  questionIndex: number;
  selectedOption: string;
}

interface Question {
  _id: string;
  questionText: string;
  options: string[];
  correctOption: string;
  explanation: string;
}

interface QuizData {
  questions: Question[];
}

interface QuizSubmissionData {
  quiz: QuizData;
  answers: Answer[];
  totalMarks: number;
}

const QuizSubmissionPage = () => {
  const { id } = useParams<string>();
  const { data, isFetching } = useGetSubmissionQuizQuery(id);

  if (isFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <DashboardLoader />
      </div>
    );
  }

  if (!data || !data.data) {
    return <p>Error: Data is not available.</p>;
  }

  const { quiz, answers, totalMarks } = data.data as QuizSubmissionData;
  const questions = quiz.questions;
  const correctAnswersCount = answers.filter((ans) => {
    const question = questions[ans.questionIndex];
    return question && ans.selectedOption === question.correctOption;
  }).length;

  return (
    <div className="my-10 max-w-6xl mx-auto">
      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold mb-4 text-center flex items-center justify-center">
            <span className="mr-2">📚</span>
            Quiz Submission Details
          </h1>

          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = answers.find(
                (ans) => ans.questionIndex === index
              );
              const isCorrect =
                userAnswer?.selectedOption === question.correctOption;
              const isUserAnswerWrong =
                !isCorrect && userAnswer?.selectedOption;

              return (
                <div key={question._id} className="border-b pb-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {question.questionText}
                  </h2>
                  <ul className="list-disc pl-5">
                    {question.options.map((option, i) => {
                      let optionClasses = "p-2 rounded cursor-pointer";
                      if (option === question.correctOption) {
                        optionClasses += " bg-green-200 text-green-700";
                      } else if (
                        isUserAnswerWrong &&
                        option === userAnswer?.selectedOption
                      ) {
                        optionClasses += " bg-red-200 text-red-700";
                      } else {
                        optionClasses += " text-gray-700";
                      }
                      return (
                        <li key={i} className={optionClasses}>
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                  {isUserAnswerWrong && (
                    <p className="text-red-600 mt-2">
                      <strong>Your answer was incorrect.</strong> The correct
                      answer is:{" "}
                      <span className="text-green-700">
                        {question.correctOption}
                      </span>
                      .
                    </p>
                  )}
                  <p className="mt-2 text-gray-700">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 bg-gray-200 p-4 rounded-md flex items-start lg:items-center lg:justify-between flex-col lg:flex-row justify-start">
            <p className="text-lg font-semibold">
              Total Questions: {questions.length}
            </p>
            <p className="text-lg font-semibold">Total Marks: {totalMarks}</p>
            <p className="text-lg font-semibold">
              Correct Answers: {correctAnswersCount}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuizSubmissionPage;
