import { VFC } from 'react';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Quiz } from '../type';
import { QuizListItem } from './QuizListItem';

type QuizListProps = {
  quizzes: Array<Quiz>;
  ActionIcon: any;
  action: (quizId: string) => void;
};
export const QuizList: VFC<QuizListProps> = ({
  quizzes,
  ActionIcon,
  action,
}) => {
  return (
    <StyledQuizList>
      {quizzes?.map((quiz) => (
        <QuizListItem
          key={quiz.id}
          quiz={quiz}
          ActionIcon={ActionIcon}
          action={action}
        />
      ))}
    </StyledQuizList>
  );
};

const StyledQuizList = styled(ListGroup)``;
