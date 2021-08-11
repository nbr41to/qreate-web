import { firebase, db, auth } from '.';
import { InputQuiz, Quiz } from '../type';
import { dateFormat } from '../utils/date-format';

const userId = auth.currentUser?.uid;

export const createQuiz = async (input: InputQuiz): Promise<void> => {
  try {
    if (!userId) throw new Error('User not logged in');
    const ref = db.collection('quiz_list').doc();
    const now = dateFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
    await ref.set({
      id: ref.id,
      userId,
      quizCount: '',
      correctCount: '',
      likedIds: [],
      favoriteIds: [],
      createdAt: now,
      updatedAt: now,
      ...input,
    });
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
