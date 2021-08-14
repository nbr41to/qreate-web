import { firebase, db, auth } from '.';
import { InputAddQuizToGroup, InputQuiz, InputQuizGroup, Quiz } from '../type';
import { dateFormat } from '../utils/date-format';

export const createQuiz = async (input: InputQuiz): Promise<string> => {
  try {
    const userId = auth.currentUser.uid;
    const ref = db.collection('quiz_list').doc();
    const now = dateFormat('YYYY/MM/DD hh:mm:ss');
    await ref.set({
      id: ref.id,
      userId,
      tags: [],
      quizCount: '',
      correctCount: '',
      likedIds: [],
      favoriteIds: [],
      createdAt: now,
      updatedAt: now,
      ...input,
    });
    return ref.id;
  } catch (error) {
    console.error(error);
  }
};

export const getQuizList = async (): Promise<Quiz[]> => {
  try {
    const result = await db.collection('quiz_list').get();
    return result.docs.map((doc) => doc.data() as Quiz) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getQuiz = async (quizId: string): Promise<Quiz> => {
  try {
    const result = await db.collection('quiz_list').doc(quizId).get();
    return result.data() as Quiz;
  } catch (error) {
    console.error(error);
  }
};

export const createGroup = async (input: InputQuizGroup): Promise<string> => {
  try {
    const userId = auth.currentUser.uid;
    const ref = db.collection('quiz_group_list').doc();
    const now = dateFormat('YYYY/MM/DD hh:mm:ss');
    await ref.set({
      id: ref.id,
      userId,
      tags: [],
      quizIds: [],
      likedIds: [],
      favoriteIds: [],
      createdAt: now,
      updatedAt: now,
      ...input,
    });
    return ref.id;
  } catch (error) {
    console.error(error);
  }
};
export const addQuizToGroup = async (
  input: InputAddQuizToGroup,
): Promise<void> => {
  const { quizId, groupId } = input;
  try {
    const ref = db.collection('quiz_group_list').doc(groupId);
    await ref.update({
      quizIds: [quizId],
    });
  } catch (error) {
    console.error(error);
  }
};
