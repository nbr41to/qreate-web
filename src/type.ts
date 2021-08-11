export type User = {
  id: string;
  name: string;
  photoUrl: string;
  followIds: string[];
  followedIds: string[];
  favoriteQuizIds: string[];
  favoriteQuizGroupIds: string[];
};
export type QuizType = 'two' | 'nth' | 'multi';
export type Quiz = {
  id: string;
  userId: string; // created by
  type: QuizType;
  question: string;
  answer: string;
  selects: string[];
  quizCount: number;
  correctCount: number;
  likedIds: string[];
  favoriteIds: string[];
  createdAt: string;
  updatedAt: string;
};
export type InputQuiz = {
  type: QuizType;
  question: string;
  answer: string;
  selects: string[];
};
export type QuizGroup = {
  id: string;
  userId: string; // created by
  name: string;
  quizIds: string[];
  likedIds: string[];
  favoriteIds: string[];
  createdAt: string;
  updatedAt: string;
};
export type InputQuizGroup = {
  name: string;
  quizIds: string[];
};

/* 考案中 */
export type AutoQuizGroupType = 'no-replace' | 'replace';
export type QuizPair = {
  question: string;
  answer: string;
};
export type AutoQuizGroup = {
  id: string;
  name: string;
  type: AutoQuizGroupType;
  quizzes: QuizPair[];
};
