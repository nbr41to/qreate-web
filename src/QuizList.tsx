import { useEffect, useState, VFC } from 'react';
import styled from 'styled-components';
import { getQuizList } from './firebase/firestore';
import { Quiz } from './type';

export const QuizList: VFC = () => {
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  useEffect(() => {
    getQuizList()
      .then((quizList) => setQuizList(quizList))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(quizList);
  return (
    <StyledQuizList>
      {quizList?.map((quiz) => (
        <div key={quiz.id}>
          {quiz.question}
          <pre>{JSON.stringify(quiz, null, 2)}</pre>
        </div>
      ))}
    </StyledQuizList>
  );
};

const StyledQuizList = styled.div``;
