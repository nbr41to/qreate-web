import { useRouter } from 'next/router';
import { FormEvent, useState, VFC } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { createQuiz, createGroup } from './firebase/firestore';

export const CreateQuizGroupForm: VFC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name) return;
    try {
      const createdGroupId = await createGroup({ name, description });
      router.push(`/group/${createdGroupId}/edit`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledCreateQuizGroupForm onSubmit={onSubmit}>
      <Form.Group controlId="name">
        <Form.Label>セットの名前</Form.Label>
        <Form.Control
          type="text"
          placeholder="動物クイズ"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>セットの説明</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="動物の特徴に関する知識が深まるクイズ"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </StyledCreateQuizGroupForm>
  );
};

const StyledCreateQuizGroupForm = styled(Form)`
  max-width: 600px;
`;
