import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { createQuiz } from './firebase/firestore';
import { InputQuiz } from './type';

export const QuizCreateForm: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: InputQuiz) => {
    console.log(data);
    const input: InputQuiz = {
      type: 'two',
      question: 'What is the answer?',
      answer: '黒ごま',
      selects: ['黒ごま', '白ごま'],
    };
    console.log(input);
    await createQuiz(input);
  };

  return (
    <StyledQuizCreateForm onSubmit={handleSubmit(onSubmit)}>
      <input {...register('example')} />
      <input {...register('question')} />
      <input {...register('answer')} />
      <input {...register('select1')} />
      <input {...register('select2')} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </StyledQuizCreateForm>
  );
};

const StyledQuizCreateForm = styled.form``;
