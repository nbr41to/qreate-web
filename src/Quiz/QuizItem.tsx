import { VFC } from 'react';
import { Quiz } from 'src/type';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';

type QuizItemProps = {
  quiz: Quiz;
};

export const QuizItem: VFC<QuizItemProps> = ({ quiz }) => {
  const rate = (quiz.correctCount / quiz.quizCount) * 100;
  const router = useRouter();
  return (
    <StyledQuizItem>
      <div>{quiz.question}</div>
      <div>❤️ {quiz.likedIds.length}</div>
      <div>⭐️ {quiz.favoriteIds.length}</div>
      <div>{quiz.createdAt}</div>
      <div>{rate ? `正答率: ${rate}%` : 'まだ誰も挑戦していない'}</div>
      <Button onClick={() => router.push(`/play/${quiz.id}`)}>解答する</Button>
    </StyledQuizItem>
  );
};

const StyledQuizItem = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px;
  margin: 8px;
`;
