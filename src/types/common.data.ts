export type TCategory = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  image: string;
};
export type TCategoryProps = {
  category: TCategory;
};

export type TQuiz = {
  _id: string;
  title: string;
  description: string;
  questions: {
    questionText: string;
    options: string[];
    correctOption: string;
    explanation?: string;
  }[];
  duration: number;
  tags?: string[];
  difficultyLevel: string;
  createdAt?: string;
};

export type TQuizProps = {
  quiz: TQuiz;
  deleteHandler?: (id: string) => void ;
};
