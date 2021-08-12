import { useRouter } from 'next/dist/client/router';
import { VFC, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { getQuiz } from 'src/firebase/firestore';
import styled from 'styled-components';
import { Quiz, QuizGroup } from '../type';

type OnQuizBoardProps = {
  quiz: Quiz | null;
};

export const OnQuizBoard: VFC<OnQuizBoardProps> = ({ quiz }) => {
  const answer = (select: string) => {
    if (select === quiz.answer) {
      alert('Correct!');
    } else {
      alert('Boom');
    }
  };
  if (!quiz) return null;
  return (
    <StyledOnQuizBoard>
      <Alert variant="success" closeLabel="閉じる" onClose={() => {}}>
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
