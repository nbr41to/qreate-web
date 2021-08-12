import { useState, VFC } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { CreateAutoQuizGroupForm } from './CreateAutoQuizGroupForm';
import { CreateQuizForm } from './CreateQuizForm';
import { CreateQuizGroupForm } from './CreateQuizGroupForm';

export const NewQuizForm: VFC = () => {
  const [createtype, setCreateType] = useState('');

  return (
    <StyledNewQuizForm>
      <DropdownButton
        onSelect={(value) => setCreateType(value)}
        title="新規作成"
      >
        <Dropdown.Item eventKey="quiz">クイズを作成する</Dropdown.Item>
        <Dropdown.Item eventKey="group">クイズのセットを作成</Dropdown.Item>
        <Dropdown.Item eventKey="auto_quiz_group">
          自動クイズを作成
        </Dropdown.Item>
      </DropdownButton>
      <br />
      {createtype === 'quiz' && <CreateQuizForm />}
      {createtype === 'group' && <CreateQuizGroupForm />}
      {createtype === 'auto_quiz_group' && <CreateAutoQuizGroupForm />}
    </StyledNewQuizForm>
  );
};

const StyledNewQuizForm = styled.div``;
