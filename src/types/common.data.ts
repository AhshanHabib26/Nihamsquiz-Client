export type TCategory = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  image: string;
};
export type TCategoryProps = {
  category: TCategory;
  setSelectedCategory: (categoryId: string) => void;
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
  category?: {
    name: string
  }
};

export type TQuizProps = {
  quiz: TQuiz;
  deleteHandler?: (id: string) => void ;
};
