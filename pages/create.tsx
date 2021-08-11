import { VFC } from 'react';
import { QuizCreateForm } from '../src/QuizCreateForm';

const CreatePage: VFC = () => {
  return (
    <div>
      <h2>クイズを新規作成</h2>
      <QuizCreateForm />
    </div>
  );
};

export default CreatePage;
