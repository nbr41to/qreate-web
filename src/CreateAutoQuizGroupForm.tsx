import { CirclePlusFill } from 'akar-icons';
import { ChangeEvent, FormEvent, useState, VFC } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { AutoQuizGroupType, InputAutoQuizGroup } from './type';

export const CreateAutoQuizGroupForm: VFC = () => {
  const initialState: InputAutoQuizGroup = {
    type: 'no-replace',
    name: '',
    quizzes: [],
  };
  const [inputForm, setInputForm] = useState(initialState);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputForm.name || !inputForm.quizzes.length)
      return alert('入力してください');
    console.log(inputForm);
  };

  return (
    <StyledCreateAutoQuizGroupForm onSubmit={onSubmit}>
      <Form.Group controlId="type">
        <Form.Label>問題の種類</Form.Label>
        <Form.Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setInputForm({
              ...inputForm,
              type: e.target.value as AutoQuizGroupType,
            })
          }
        >
          <option value="no-replace">交換不可</option>
          <option value="replace">交換可能</option>
        </Form.Select>
        <Form.Text className="text-muted">問題のタイプを選択します</Form.Text>
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>セットの名前</Form.Label>
        <Form.Control
          type="text"
          placeholder="安土桃山時代の武将"
          value={inputForm.name}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              name: e.target.value,
            })
          }
        />
        <Form.Text className="text-muted">
          このクイズのセットの名前を入力します
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </StyledCreateAutoQuizGroupForm>
  );
};

const StyledCreateAutoQuizGroupForm = styled(Form)`
  max-width: 600px;
`;
