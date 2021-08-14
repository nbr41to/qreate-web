import { VFC } from 'react';
import { Quiz } from 'src/type';
import styled from 'styled-components';
import { ListGroupItem } from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

type QuizListItemProps = {
  quiz: Quiz;
  ActionIcon: any;
  action: (quizId: string) => void;
};

export const QuizListItem: VFC<QuizListItemProps> = ({
  quiz,
  ActionIcon,
  action,
}) => {
  const router = useRouter();
  return (
    <StyledQuizListItem className="p-3">
      <div
        className="left_items"
        onClick={() => router.push(`/quiz/${quiz.id}`)}
      >
        {quiz.question}
      </div>
      <div className="right_items">
        {quiz.createdAt}
        {'　'}
        ❤️ {quiz.likedIds.length}
        {'　'}
        ⭐️ {quiz.favoriteIds.length}
        {'　'}
        <ActionIcon onClick={() => action(quiz.id)} />
      </div>
    </StyledQuizListItem>
  );
};

const StyledQuizListItem = styled(ListGroupItem)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > .left_items {
    cursor: pointer;
  }
  > .right_items {
    display: flex;
    svg {
      cursor: pointer;
    }
  }
`;
