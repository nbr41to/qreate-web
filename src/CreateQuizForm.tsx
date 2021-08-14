import { Circle, CirclePlusFill, Cross } from 'akar-icons';
import { ChangeEvent, FormEvent, useState, VFC } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { addQuizToGroup, createQuiz } from './firebase/firestore';
import { InputQuiz, QuizType } from './type';

type CreateQuizFormProps = {
  groupIn?: string;
};

export const CreateQuizForm: VFC<CreateQuizFormProps> = ({ groupIn }) => {
  const initialState: InputQuiz = {
    type: 'two',
    question: '',
    answer: '',
    selects: [],
  };
  const [inputForm, setInputForm] = useState(initialState);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputForm.question || !inputForm.answer)
      return alert('入力してください');

    let createdQuizId: string;
    if (inputForm.type === 'two') {
      createdQuizId = await createQuiz({
        ...inputForm,
        selects: ['true', 'false'],
      });
    }
    if (inputForm.type === 'nth') {
      if (inputForm.selects.length < 2)
        return alert('選択肢を2つ以上入力してください');
      createdQuizId = await createQuiz({
        ...inputForm,
        selects: [...inputForm.selects, inputForm.answer],
      });
    }
    if (groupIn) {
      await addQuizToGroup({ quizId: createdQuizId, groupId: groupIn });
    }
  };

  return (
    <StyledCreateQuizForm onSubmit={onSubmit}>
      <Form.Group controlId="type">
        <Form.Label>問題の種類</Form.Label>
        <Form.Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setInputForm({ ...inputForm, type: e.target.value as QuizType })
          }
        >
          <option value="two">○×クイズ</option>
          <option value="nth">n個からひとつを選択</option>
        </Form.Select>
        <Form.Text className="text-muted">問題のタイプを選択します</Form.Text>
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label>問題</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="パンはパンでも食べられないパンは？"
          value={inputForm.question}
          onChange={(e) =>
            setInputForm({ ...inputForm, question: e.target.value })
          }
        />
        <Form.Text className="text-muted">問題文を入力します</Form.Text>
      </Form.Group>
      {inputForm.type === 'two' ? (
        <>
          <Form.Label>正解</Form.Label>
          <div>
            <Button
              className="me-2"
              variant={
                inputForm.answer === 'true' ? 'primary' : 'outline-secondary'
              }
              onClick={() => setInputForm({ ...inputForm, answer: 'true' })}
            >
              <Circle />
            </Button>
            <Button
              variant={
                inputForm.answer === 'false' ? 'primary' : 'outline-secondary'
              }
              onClick={() => setInputForm({ ...inputForm, answer: 'false' })}
            >
              <Cross />
            </Button>
          </div>
        </>
      ) : (
        <>
          <Form.Group controlId="answer">
            <Form.Label>答え</Form.Label>
            <Form.Control
              type="text"
              placeholder="フライパン"
              value={inputForm.answer}
              onChange={(e) =>
                setInputForm({
                  ...inputForm,
                  answer: e.target.value,
                })
              }
            />
            <Form.Text className="text-muted">問題の答えを入力します</Form.Text>
          </Form.Group>
          <Form.Group controlId="selects">
            <Form.Label>選択肢</Form.Label>
            <Form.Control
              type="text"
              placeholder="フライパン"
              value={inputForm.answer}
              readOnly
            />
            {inputForm.selects.map((item, index) => (
              <Form.Control
                key={index}
                type="text"
                placeholder="コッペパン"
                // value={inputForm.selects[index]}
                onChange={(e) => {
                  inputForm.selects[index] = e.target.value;
                  setInputForm(inputForm);
                }}
              />
            ))}
            <CirclePlusFill
              onClick={() =>
                setInputForm({
                  ...inputForm,
                  selects: [...inputForm.selects, ''],
                })
              }
            />
            <Form.Text className="text-muted">問題の答えを入力します</Form.Text>
          </Form.Group>
        </>
      )}

      <Button variant="primary" type="submit" className="mt-4">
        Submit
      </Button>
    </StyledCreateQuizForm>
  );
};

const StyledCreateQuizForm = styled(Form)`
  max-width: 600px;
`;
