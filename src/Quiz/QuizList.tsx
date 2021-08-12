import { useEffect, useState, VFC } from 'react';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { getQuizList } from '../firebase/firestore';
import { Quiz } from '../type';
import { QuizListItem } from './QuizListItem';

export const QuizList: VFC = () => {
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  useEffect(() => {
    getQuizList()
      .then((quizList) => setQuizList(quizList))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StyledQuizList>
      {quizList?.map((quiz) => (
        <QuizListItem key={quiz.id} quiz={quiz} />
      ))}
    </StyledQuizList>
  );
};

const StyledQuizList = styled(ListGroup)``;
