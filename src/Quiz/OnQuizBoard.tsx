import { VFC, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Quiz } from '../type';

type OnQuizBoardProps = {
  quiz: Quiz | null;
};

export const OnQuizBoard: VFC<OnQuizBoardProps> = ({ quiz }) => {
  const [open, setOpen] = useState(false);
  const answer = (select: string) => {
    if (select === quiz.answer) {
      setOpen(true);
    } else {
      alert('Boom');
    }
  };
  if (!quiz) return null;
  return (
    <StyledOnQuizBoard>
      <Alert
        variant="success"
        show={open}
        dismissible
        onClose={() => setOpen(false)}
      >
        正解！
      </Alert>
      {'question' in quiz ? (
        <>
          <div>{quiz.question}</div>
          <div>
            {quiz.selects.map((option, index) => (
              <Button key={index} onClick={() => answer(option)}>
                {option}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <>QuizGroup</>
      )}
    </StyledOnQuizBoard>
  );
};

const StyledOnQuizBoard = styled.div``;
