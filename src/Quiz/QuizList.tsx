import { useEffect, useState, VFC } from 'react';
import styled from 'styled-components';
import { getQuizList } from '../firebase/firestore';
import { Quiz } from '../type';
import { QuizItem } from './QuizItem';

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
        <QuizItem key={quiz.id} quiz={quiz} />
      ))}
    </StyledQuizList>
  );
};

const StyledQuizList = styled.div``;