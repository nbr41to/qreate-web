import { VFC } from 'react';
import { Quiz } from 'src/type';
import styled from 'styled-components';
import { Badge, Button, ButtonGroup, Card } from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';

type QuizCardItemProps = {
  quiz: Quiz;
};

export const QuizCardItem: VFC<QuizCardItemProps> = ({ quiz }) => {
  const rate = (quiz.correctCount / quiz.quizCount) * 100;
  const router = useRouter();
  return (
    <StyledQuizCardItem className="m-4 p-4">
      <Card.Title>{quiz.question}</Card.Title>
      <Badge bg="primary" className="mb-3">
        {quiz.type}
      </Badge>
      <Card.Subtitle className="mb-2 text-muted">
        {rate ? `正答率: ${rate}%` : 'まだ誰も挑戦していない'}
      </Card.Subtitle>
      <ButtonGroup className="mb-2">
        <Card.Body>
          <Button variant="outline-secondary">❤️ {quiz.likedIds.length}</Button>
          <Button variant="outline-secondary">
            ⭐️ {quiz.favoriteIds.length}
          </Button>
        </Card.Body>
      </ButtonGroup>
      <Card.Text>{quiz.createdAt}</Card.Text>
      <Button onClick={() => router.push(`/play/${quiz.id}`)}>解答する</Button>
    </StyledQuizCardItem>
  );
};

const StyledQuizCardItem = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
`;
