import { VFC } from 'react';
import { Quiz } from 'src/type';
import styled from 'styled-components';
import { ListGroupItem } from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';
import { Pencil } from 'akar-icons';

type QuizListItemProps = {
  quiz: Quiz;
};

export const QuizListItem: VFC<QuizListItemProps> = ({ quiz }) => {
  return (
    <StyledQuizListItem className="p-3">
      <div>{quiz.question}</div>
      <div className="right_items">
        {quiz.createdAt}
        {'　'}
        ❤️ {quiz.likedIds.length}
        {'　'}
        ⭐️ {quiz.favoriteIds.length}
        {'　'}
        <Pencil />
      </div>
    </StyledQuizListItem>
  );
};

const StyledQuizListItem = styled(ListGroupItem)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > .right_items {
    display: flex;
  }
`;
