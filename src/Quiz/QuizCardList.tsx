import { useEffect, useState, VFC } from 'react';
import styled from 'styled-components';
import { getQuizList } from '../firebase/firestore';
import { Quiz } from '../type';
import { QuizCardItem } from './QuizCardItem';

export const QuizCardList: VFC = () => {
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  useEffect(() => {
    getQuizList()
      .then((quizList) => setQuizList(quizList))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StyledQuizCardList>
      {quizList?.map((quiz) => (
        <QuizCardItem key={quiz.id} quiz={quiz} />
      ))}
    </StyledQuizCardList>
  );
};

const StyledQuizCardList = styled.div``;
