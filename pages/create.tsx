import { VFC } from 'react';
import { NewQuizForm } from 'src/NewQuizForm';

const CreatePage: VFC = () => {
  return (
    <div>
      <h2>クイズを新規作成</h2>
      <NewQuizForm />
    </div>
  );
};

export default CreatePage;
